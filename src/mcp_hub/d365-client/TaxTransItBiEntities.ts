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
import type { TaxTransItBiEntitiesApi } from './TaxTransItBiEntitiesApi';
import { NoYes } from './NoYes';
import { IntentLetterOriginIt } from './IntentLetterOriginIt';

/**
 * This class represents the entity "TaxTransITBiEntities" of service "d365_metadata".
 */
export class TaxTransItBiEntities<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements TaxTransItBiEntitiesType<T>
{
  /**
   * Technical entity name for TaxTransItBiEntities.
   */
  static override _entityName = 'TaxTransITBiEntities';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the TaxTransItBiEntities entity.
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
   * Split Paym Direct.
   * @nullable
   */
  declare splitPaymDirect?: NoYes | null;
  /**
   * Plafond Date.
   */
  declare plafondDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Split Paym Reverse.
   * @nullable
   */
  declare splitPaymReverse?: NoYes | null;
  /**
   * Intent Letter Id.
   * @nullable
   */
  declare intentLetterId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Invoice Ref Rec Id.
   */
  declare invoiceRefRecId: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Tax Trans.
   */
  declare taxTrans: DeserializedType<T, 'Edm.Int64'>;
  /**
   * Plafond Id.
   * @nullable
   */
  declare plafondId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Intent Letter Origin.
   * @nullable
   */
  declare intentLetterOrigin?: IntentLetterOriginIt | null;
  /**
   * Invoice Approval.
   * @nullable
   */
  declare invoiceApproval?: NoYes | null;

  constructor(_entityApi: TaxTransItBiEntitiesApi<T>) {
    super(_entityApi);
  }
}

export interface TaxTransItBiEntitiesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  sourceKey: DeserializedType<T, 'Edm.Int64'>;
  splitPaymDirect?: NoYes | null;
  plafondDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  splitPaymReverse?: NoYes | null;
  intentLetterId?: DeserializedType<T, 'Edm.String'> | null;
  invoiceRefRecId: DeserializedType<T, 'Edm.Int64'>;
  taxTrans: DeserializedType<T, 'Edm.Int64'>;
  plafondId?: DeserializedType<T, 'Edm.String'> | null;
  intentLetterOrigin?: IntentLetterOriginIt | null;
  invoiceApproval?: NoYes | null;
}
