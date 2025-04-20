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
import type { CustomerPaymentMethodSpecificationsApi } from './CustomerPaymentMethodSpecificationsApi';
import {
  SalesAgreementConfirmations,
  SalesAgreementConfirmationsType
} from './SalesAgreementConfirmations';
import { SalesAgreements, SalesAgreementsType } from './SalesAgreements';
import {
  CustomerPaymentMethods,
  CustomerPaymentMethodsType
} from './CustomerPaymentMethods';

/**
 * This class represents the entity "CustomerPaymentMethodSpecifications" of service "d365_metadata".
 */
export class CustomerPaymentMethodSpecifications<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerPaymentMethodSpecificationsType<T>
{
  /**
   * Technical entity name for CustomerPaymentMethodSpecifications.
   */
  static override _entityName = 'CustomerPaymentMethodSpecifications';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerPaymentMethodSpecifications entity.
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
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Return Segment.
   * @nullable
   */
  declare returnSegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Type.
   * @nullable
   */
  declare paymentType?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Remittance Segment.
   * @nullable
   */
  declare remittanceSegment?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Class Name.
   * @nullable
   */
  declare className?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Payment Way.
   * @nullable
   */
  declare paymentWay?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Spec Parameters.
   * @nullable
   */
  declare specParameters?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-many navigation property to the {@link SalesAgreementConfirmations} entity.
   */
  declare salesAgreementConfirmationHeaders: SalesAgreementConfirmations<T>[];
  /**
   * One-to-many navigation property to the {@link SalesAgreements} entity.
   */
  declare salesAgreementHeaders: SalesAgreements<T>[];
  /**
   * One-to-one navigation property to the {@link CustomerPaymentMethods} entity.
   */
  declare customerPaymentMethod?: CustomerPaymentMethods<T> | null;

  constructor(_entityApi: CustomerPaymentMethodSpecificationsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerPaymentMethodSpecificationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  paymentMethodName: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  returnSegment?: DeserializedType<T, 'Edm.String'> | null;
  paymentType?: DeserializedType<T, 'Edm.String'> | null;
  remittanceSegment?: DeserializedType<T, 'Edm.String'> | null;
  className?: DeserializedType<T, 'Edm.String'> | null;
  paymentWay?: DeserializedType<T, 'Edm.String'> | null;
  specParameters?: DeserializedType<T, 'Edm.String'> | null;
  salesAgreementConfirmationHeaders: SalesAgreementConfirmationsType<T>[];
  salesAgreementHeaders: SalesAgreementsType<T>[];
  customerPaymentMethod?: CustomerPaymentMethodsType<T> | null;
}
