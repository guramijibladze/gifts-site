export interface User {
    giftItemId:number,
    firstname:string,
    lastname:string,
    phoneNumber:string,
    smsCode:string
}

export interface GiftedItemModel {
    id:number,
    imageBase64:string,
    startDate:string,
    endDate:string,
    giftDescription:string,
    giftName:string,
    winnerFirstName:string,
    winnerLastName:string,
    donor:string,
    donorLogoBase64:string,
    participantCount:number
}