import { AlertController } from "@ionic/angular";

export class alertPresent {
            public static async presentAlert(mensagem, alertCtrl){
                let alert = await alertCtrl.create({
                    header: mensagem,
                    buttons: ['OK']
                });

                return alert.present();
            }
    }
