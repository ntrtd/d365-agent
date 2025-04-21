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
import type { DeliveryModesV2Api } from './DeliveryModesV2Api';
import { Prospects, ProspectsType } from './Prospects';
import {
  SalesAutomaticSalesDocumentHeaderTaxCharges,
  SalesAutomaticSalesDocumentHeaderTaxChargesType
} from './SalesAutomaticSalesDocumentHeaderTaxCharges';
import {
  DeliveryModeChannelLines,
  DeliveryModeChannelLinesType
} from './DeliveryModeChannelLines';
import {
  PurchaseDestinationAddressDeliveryModeTransportationTimes,
  PurchaseDestinationAddressDeliveryModeTransportationTimesType
} from './PurchaseDestinationAddressDeliveryModeTransportationTimes';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  SalesAgreementConfirmations,
  SalesAgreementConfirmationsType
} from './SalesAgreementConfirmations';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "DeliveryModesV2" of service "d365_metadata".
 */
export class DeliveryModesV2<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements DeliveryModesV2Type<T>
{
  /**
   * Technical entity name for DeliveryModesV2.
   */
  static override _entityName = 'DeliveryModesV2';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the DeliveryModesV2 entity.
   */
  static _keys = ['dataAreaId', 'ModeCode'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Mode Code.
   */
  declare modeCode: DeserializedType<T, 'Edm.String'>;
  /**
   * Intrastat Transport Mode Code.
   * @nullable
   */
  declare intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Charge Delivery Group Id.
   * @nullable
   */
  declare chargeDeliveryGroupId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Default Expedite Code.
   * @nullable
   */
  declare defaultExpediteCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mode Description.
   * @nullable
   */
  declare modeDescription?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Mode Display Order.
   */
  declare modeDisplayOrder: DeserializedType<T, 'Edm.Int32'>;
  /**
   * One-to-many navigation property to the {@link Prospects} entity.
   */
  declare prospects: Prospects<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAutomaticSalesDocumentHeaderTaxCharges} entity.
   */
  declare salesChargeDeliveryModes: SalesAutomaticSalesDocumentHeaderTaxCharges<T>[];
  /**
   * One-to-many navigation property to the {@link DeliveryModeChannelLines} entity.
   */
  declare deliveryModeChannelLine: DeliveryModeChannelLines<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseDestinationAddressDeliveryModeTransportationTimes} entity.
   */
  declare purchaseDestinationAddressDeliveryModeTransportationTimes: PurchaseDestinationAddressDeliveryModeTransportationTimes<T>[];
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmations} entity.
   */
  declare salesAgreementConfirmationHeaders: SalesAgreementConfirmations<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: DeliveryModesV2Api<T>) {
    super(_entityApi);
  }
}

export interface DeliveryModesV2Type<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  modeCode: DeserializedType<T, 'Edm.String'>;
  intrastatTransportModeCode?: DeserializedType<T, 'Edm.String'> | null;
  chargeDeliveryGroupId?: DeserializedType<T, 'Edm.String'> | null;
  defaultExpediteCode?: DeserializedType<T, 'Edm.String'> | null;
  modeDescription?: DeserializedType<T, 'Edm.String'> | null;
  modeDisplayOrder: DeserializedType<T, 'Edm.Int32'>;
  prospects: ProspectsType<T>[];
  salesChargeDeliveryModes: SalesAutomaticSalesDocumentHeaderTaxChargesType<T>[];
  deliveryModeChannelLine: DeliveryModeChannelLinesType<T>[];
  purchaseDestinationAddressDeliveryModeTransportationTimes: PurchaseDestinationAddressDeliveryModeTransportationTimesType<T>[];
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  salesAgreementConfirmationHeaders: SalesAgreementConfirmationsType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
