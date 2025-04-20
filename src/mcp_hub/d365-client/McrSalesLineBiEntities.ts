/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import {
  Entity,
  DefaultDeSerializers,
  DeSerializers,
  DeserializedType
} from '@sap-cloud-sdk/odata-v4';
import type { McrSalesLineBiEntitiesApi } from './McrSalesLineBiEntitiesApi';
import { NoYes } from './NoYes';
import { McrUpSellOrigin } from './McrUpSellOrigin';
import { McrLineType } from './McrLineType';
import { McrGiftCardType } from './McrGiftCardType';
import { RetailPriceOverrideWorkflowState } from './RetailPriceOverrideWorkflowState';

/**
 * This class represents the entity "MCRSalesLineBiEntities" of service "d365_metadata".
 */
export class McrSalesLineBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements McrSalesLineBiEntitiesType<T>
{
  /**
   * Technical entity name for McrSalesLineBiEntities.
   */
  static override _entityName = 'MCRSalesLineBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrSalesLineBiEntities entity.
   */
  static _keys = ['dataAreaId', 'SourceKey'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Source Key.
   */
  declare sourceKey: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Gift Card Expiration.
   * @nullable
   */
  declare giftCardExpiration?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Expedite.
   * @nullable
   */
  declare expedite?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Installment Eligible.
   * @nullable
   */
  declare installmentEligible?: NoYes | null;
  /**
   * Source Id.
   * @nullable
   */
  declare sourceId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Buyer Email.
   * @nullable
   */
  declare giftCardBuyerEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Exchange Invent Ref Trans Id.
   * @nullable
   */
  declare exchangeInventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Gift Message.
   * @nullable
   */
  declare giftCardGiftMessage?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Up Sell Origin.
   * @nullable
   */
  declare upSellOrigin?: McrUpSellOrigin | null;
  /**
   * Gift Card Recipient Name.
   * @nullable
   */
  declare giftCardRecipientName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Line Type.
   * @nullable
   */
  declare lineType?: McrLineType | null;
  /**
   * Gift Card Amount Ru.
   */
  declare giftCardAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Gift Card Number.
   * @nullable
   */
  declare giftCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Continuity Schedule Id.
   * @nullable
   */
  declare continuityScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Up Sell Origin Ref.
   * @nullable
   */
  declare upSellOriginRef?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Buyer Name.
   * @nullable
   */
  declare giftCardBuyerName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Parent Lot Id.
   * @nullable
   */
  declare parentLotId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Recipient Email.
   * @nullable
   */
  declare giftCardRecipientEmail?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Gift Card Type.
   * @nullable
   */
  declare giftCardType?: McrGiftCardType | null;
  /**
   * Retail Price Override Workflow State.
   * @nullable
   */
  declare retailPriceOverrideWorkflowState?: RetailPriceOverrideWorkflowState | null;

  constructor(_entityApi: McrSalesLineBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface McrSalesLineBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  giftCardExpiration?: DeserializedType<T, 'Edm.String'> | null;
  expedite?: DeserializedType<T, 'Edm.String'> | null;
  installmentEligible?: NoYes | null;
  sourceId?: DeserializedType<T, 'Edm.String'> | null;
  giftCardBuyerEmail?: DeserializedType<T, 'Edm.String'> | null;
  exchangeInventRefTransId?: DeserializedType<T, 'Edm.String'> | null;
  giftCardGiftMessage?: DeserializedType<T, 'Edm.String'> | null;
  upSellOrigin?: McrUpSellOrigin | null;
  giftCardRecipientName?: DeserializedType<T, 'Edm.String'> | null;
  lineType?: McrLineType | null;
  giftCardAmountRu: DeserializedType<T, 'Edm.Decimal'>;
  giftCardNumber?: DeserializedType<T, 'Edm.String'> | null;
  continuityScheduleId?: DeserializedType<T, 'Edm.String'> | null;
  upSellOriginRef?: DeserializedType<T, 'Edm.String'> | null;
  giftCardBuyerName?: DeserializedType<T, 'Edm.String'> | null;
  parentLotId?: DeserializedType<T, 'Edm.String'> | null;
  giftCardRecipientEmail?: DeserializedType<T, 'Edm.String'> | null;
  giftCardType?: McrGiftCardType | null;
  retailPriceOverrideWorkflowState?: RetailPriceOverrideWorkflowState | null;
}
