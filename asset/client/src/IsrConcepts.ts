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
import type { IsrConceptsApi } from './IsrConceptsApi';
import { IsrConceptCategoryMx } from './IsrConceptCategoryMx';
import { IsrCreditDebitMx } from './IsrCreditDebitMx';

/**
 * This class represents the entity "ISRConcepts" of service "d365_metadata".
 */
export class IsrConcepts<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements IsrConceptsType<T>
{
  /**
   * Technical entity name for IsrConcepts.
   */
  static override _entityName = 'ISRConcepts';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the IsrConcepts entity.
   */
  static _keys = [
    'dataAreaId',
    'ConceptId',
    'MainAccountId',
    'ChartOfAccountsName'
  ];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Concept Id.
   * @nullable
   */
  declare conceptId?: IsrConceptCategoryMx | null;
  /**
   * Main Account Id.
   */
  declare mainAccountId: DeserializedType<T, 'Edm.String'>;
  /**
   * Chart Of Accounts Name.
   */
  declare chartOfAccountsName: DeserializedType<T, 'Edm.String'>;
  /**
   * Debit Credit Indicator.
   * @nullable
   */
  declare debitCreditIndicator?: IsrCreditDebitMx | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: IsrConceptsApi<T>) {
    super(_entityApi);
  }
}

export interface IsrConceptsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  conceptId?: IsrConceptCategoryMx | null;
  mainAccountId: DeserializedType<T, 'Edm.String'>;
  chartOfAccountsName: DeserializedType<T, 'Edm.String'>;
  debitCreditIndicator?: IsrCreditDebitMx | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
