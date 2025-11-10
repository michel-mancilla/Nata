class SymbolModal extends HTMLElement {
    connectedCallback() {
        this.attachShadow({ mode: 'open' });
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    position: fixed;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    backdrop-filter: blur(5px);
                }
                
                .modal-container {
                    background: rgba(15, 23, 42, 0.9);
                    border-radius: 1rem;
                    padding: 2rem;
                    max-width: 80%;
                    width: 750px;
                    box-shadow: 0 10px 25px rgba(0, 0, 0, 0.5);
                    border: 1px solid rgba(255, 255, 255, 0.1);
                    position: relative;
                    animation: fadeIn 0.3s ease-out;
                }
                
                .close-btn {
                    position: absolute;
                    top: 1rem;
                    right: 1rem;
                    background: transparent;
                    border: none;
                    color: white;
                    font-size: 1.5rem;
                    cursor: pointer;
                    transition: transform 0.2s;
                }
                
                .close-btn:hover {
                    transform: rotate(90deg);
                }
                
                .modal-content {
                    color: white;
                    font-size: 1rem;
                    line-height: 1.6;
                }
                
                @keyframes fadeIn {
                    from { opacity: 0; transform: translateY(20px); }
                    to { opacity: 1; transform: translateY(0); }
                }
            </style>
            
            <div class="modal-container">
                <button class="close-btn">
                    <i data-feather="x"></i>
                </button>
                <div class="modal-content">
                    <slot></slot>
                </div>
            </div>
        `;

        this.shadowRoot.querySelector('.close-btn').addEventListener('click', () => {
            this.classList.add('hidden');
        });
    }
}

customElements.define('symbol-modal', SymbolModal);