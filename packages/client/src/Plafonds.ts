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
import type { PlafondsApi } from './PlafondsApi';
import { PlafondTypeIt } from './PlafondTypeIt';
import { NoYes } from './NoYes';
import { PlafondStatusIt } from './PlafondStatusIt';
import { PlafondLimitTypeIt } from './PlafondLimitTypeIt';

/**
 * This class represents the entity "Plafonds" of service "d365_metadata".
 */
export class Plafonds<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PlafondsType<T>
{
  /**
   * Technical entity name for Plafonds.
   */
  static override _entityName = 'Plafonds';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the Plafonds entity.
   */
  static _keys = ['dataAreaId', 'PlafondId'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plafond Id.
   */
  declare plafondId: DeserializedType<T, 'Edm.String'>;
  /**
   * Plafond Type.
   * @nullable
   */
  declare plafondType?: PlafondTypeIt | null;
  /**
   * No Limit Check.
   * @nullable
   */
  declare noLimitCheck?: NoYes | null;
  /**
   * Status.
   * @nullable
   */
  declare status?: PlafondStatusIt | null;
  /**
   * Exportation.
   * @nullable
   */
  declare exportation?: NoYes | null;
  /**
   * To Date.
   */
  declare toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Closed Date.
   */
  declare closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * Initial Amount.
   */
  declare initialAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Assimilated Operations.
   * @nullable
   */
  declare assimilatedOperations?: NoYes | null;
  /**
   * Limit Percent.
   */
  declare limitPercent: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Limit Type.
   * @nullable
   */
  declare limitType?: PlafondLimitTypeIt | null;
  /**
   * From Date.
   */
  declare fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  /**
   * San Marino Sales.
   * @nullable
   */
  declare sanMarinoSales?: NoYes | null;
  /**
   * Current Amount.
   */
  declare currentAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Eu Sales.
   * @nullable
   */
  declare euSales?: NoYes | null;
  /**
   * Vat Declaration Presented.
   * @nullable
   */
  declare vatDeclarationPresented?: NoYes | null;
  /**
   * Tax Period.
   * @nullable
   */
  declare taxPeriod?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Limit Amount.
   */
  declare limitAmount: DeserializedType<T, 'Edm.Decimal'>;
  /**
   * Special Operations.
   * @nullable
   */
  declare specialOperations?: NoYes | null;

  constructor(_entityApi: PlafondsApi<T>) {
    super(_entityApi);
  }
}

export interface PlafondsType<T extends DeSerializers = DefaultDeSerializers> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  plafondId: DeserializedType<T, 'Edm.String'>;
  plafondType?: PlafondTypeIt | null;
  noLimitCheck?: NoYes | null;
  status?: PlafondStatusIt | null;
  exportation?: NoYes | null;
  toDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  description?: DeserializedType<T, 'Edm.String'> | null;
  closedDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  initialAmount: DeserializedType<T, 'Edm.Decimal'>;
  assimilatedOperations?: NoYes | null;
  limitPercent: DeserializedType<T, 'Edm.Decimal'>;
  limitType?: PlafondLimitTypeIt | null;
  fromDate: DeserializedType<T, 'Edm.DateTimeOffset'>;
  sanMarinoSales?: NoYes | null;
  currentAmount: DeserializedType<T, 'Edm.Decimal'>;
  euSales?: NoYes | null;
  vatDeclarationPresented?: NoYes | null;
  taxPeriod?: DeserializedType<T, 'Edm.String'> | null;
  limitAmount: DeserializedType<T, 'Edm.Decimal'>;
  specialOperations?: NoYes | null;
}
