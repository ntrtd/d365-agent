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
import type { RetailTransactionAddressLinesApi } from './RetailTransactionAddressLinesApi';

/**
 * This class represents the entity "RetailTransactionAddressLines" of service "d365_metadata".
 */
export class RetailTransactionAddressLines<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements RetailTransactionAddressLinesType<T>
{
  /**
   * Technical entity name for RetailTransactionAddressLines.
   */
  static override _entityName = 'RetailTransactionAddressLines';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the RetailTransactionAddressLines entity.
   */
  static _keys = [
    'dataAreaId',
    'TransactionNumber',
    'Terminal',
    'LineNumber',
    'OperatingUnitNumber'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Transaction Number.
   */
  declare transactionNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Terminal.
   */
  declare terminal: DeserializedType<T, 'Edm.String'>;
  /**
   * Line Number.
   */
  declare lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Operating Unit Number.
   */
  declare operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  /**
   * Zip Code.
   * @nullable
   */
  declare zipCode?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * District Name.
   * @nullable
   */
  declare districtName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Country Region Id.
   * @nullable
   */
  declare countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Email.
   * @nullable
   */
  declare email?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street Number.
   * @nullable
   */
  declare streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * County.
   * @nullable
   */
  declare county?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Delivery Name.
   * @nullable
   */
  declare deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * City.
   * @nullable
   */
  declare city?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Attention To Address Line.
   * @nullable
   */
  declare attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Street.
   * @nullable
   */
  declare street?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Telephone.
   * @nullable
   */
  declare telephone?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * State.
   * @nullable
   */
  declare state?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: RetailTransactionAddressLinesApi<T>) {
    super(_entityApi);
  }
}

export interface RetailTransactionAddressLinesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  transactionNumber: DeserializedType<T, 'Edm.String'>;
  terminal: DeserializedType<T, 'Edm.String'>;
  lineNumber: DeserializedType<T, 'Edm.Decimal'>;
  operatingUnitNumber: DeserializedType<T, 'Edm.String'>;
  zipCode?: DeserializedType<T, 'Edm.String'> | null;
  districtName?: DeserializedType<T, 'Edm.String'> | null;
  countryRegionId?: DeserializedType<T, 'Edm.String'> | null;
  email?: DeserializedType<T, 'Edm.String'> | null;
  streetNumber?: DeserializedType<T, 'Edm.String'> | null;
  county?: DeserializedType<T, 'Edm.String'> | null;
  deliveryName?: DeserializedType<T, 'Edm.String'> | null;
  city?: DeserializedType<T, 'Edm.String'> | null;
  attentionToAddressLine?: DeserializedType<T, 'Edm.String'> | null;
  street?: DeserializedType<T, 'Edm.String'> | null;
  telephone?: DeserializedType<T, 'Edm.String'> | null;
  state?: DeserializedType<T, 'Edm.String'> | null;
}
