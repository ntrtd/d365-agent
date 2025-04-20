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
import type { VendorPaymentMethodSpecificationsApi } from './VendorPaymentMethodSpecificationsApi';
import { ValidationControlBr } from './ValidationControlBr';
import {
  PurchaseAgreements,
  PurchaseAgreementsType
} from './PurchaseAgreements';
import {
  VendorPaymentMethods,
  VendorPaymentMethodsType
} from './VendorPaymentMethods';
import {
  ClmIntegrationPurchaseAgreements,
  ClmIntegrationPurchaseAgreementsType
} from './ClmIntegrationPurchaseAgreements';

/**
 * This class represents the entity "VendorPaymentMethodSpecifications" of service "d365_metadata".
 */
export class VendorPaymentMethodSpecifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorPaymentMethodSpecificationsType<T>
{
  /**
   * Technical entity name for VendorPaymentMethodSpecifications.
   */
  static override _entityName = 'VendorPaymentMethodSpecifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorPaymentMethodSpecifications entity.
   */
  static _keys = ['dataAreaId', 'PaymentMethodName', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Payment Method Name.
   */
  declare paymentMethodName: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Electronic Payment Type.
   * @nullable
   */
  declare electronicPaymentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Spec Parameters.
   * @nullable
   */
  declare specParameters?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment Segment.
   * @nullable
   */
  declare electronicPaymentSegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment Way.
   * @nullable
   */
  declare electronicPaymentWay?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class Name.
   * @nullable
   */
  declare className?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Electronic Payment Validation Control.
   * @nullable
   */
  declare electronicPaymentValidationControl?: ValidationControlBr | null;
  /**
   * One-to-many navigation property to the {@link PurchaseAgreements} entity.
   */
  declare purchaseAgreementHeaders: PurchaseAgreements<T>[];
  /**
   * One-to-one navigation property to the {@link VendorPaymentMethods} entity.
   */
  declare vendorPaymentMethod?: VendorPaymentMethods<T> | null;
  /**
   * One-to-many navigation property to the {@link ClmIntegrationPurchaseAgreements} entity.
   */
  declare clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreements<T>[];

  constructor(_entityApi: VendorPaymentMethodSpecificationsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorPaymentMethodSpecificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentMethodName: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  electronicPaymentType?: DeserializedType<T, 'Edm.String'> | null;
  specParameters?: DeserializedType<T, 'Edm.String'> | null;
  electronicPaymentSegment?: DeserializedType<T, 'Edm.String'> | null;
  electronicPaymentWay?: DeserializedType<T, 'Edm.String'> | null;
  className?: DeserializedType<T, 'Edm.String'> | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
  electronicPaymentValidationControl?: ValidationControlBr | null;
  purchaseAgreementHeaders: PurchaseAgreementsType<T>[];
  vendorPaymentMethod?: VendorPaymentMethodsType<T> | null;
  clmIntegrationPurchaseAgreementHeaders: ClmIntegrationPurchaseAgreementsType<T>[];
}
