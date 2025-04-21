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
import type { McrTaxGroupDefaultRulesApi } from './McrTaxGroupDefaultRulesApi';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "MCRTaxGroupDefaultRules" of service "d365_metadata".
 */
export class McrTaxGroupDefaultRules<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements McrTaxGroupDefaultRulesType<T>
{
  /**
   * Technical entity name for McrTaxGroupDefaultRules.
   */
  static override _entityName = 'MCRTaxGroupDefaultRules';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the McrTaxGroupDefaultRules entity.
   */
  static _keys = ['dataAreaId', 'Priority'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Priority.
   */
  declare priority: DeserializedType<T, 'Edm.Int32'>;
  /**
   * Include Zip Code.
   * @nullable
   */
  declare includeZipCode?: NoYes | null;
  /**
   * Include State.
   * @nullable
   */
  declare includeState?: NoYes | null;
  /**
   * Include City.
   * @nullable
   */
  declare includeCity?: NoYes | null;
  /**
   * Include Country.
   * @nullable
   */
  declare includeCountry?: NoYes | null;
  /**
   * Include County.
   * @nullable
   */
  declare includeCounty?: NoYes | null;

  constructor(_entityApi: McrTaxGroupDefaultRulesApi<T>) {
    super(_entityApi);
  }
}

export interface McrTaxGroupDefaultRulesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  priority: DeserializedType<T, 'Edm.Int32'>;
  includeZipCode?: NoYes | null;
  includeState?: NoYes | null;
  includeCity?: NoYes | null;
  includeCountry?: NoYes | null;
  includeCounty?: NoYes | null;
}
