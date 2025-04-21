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
import type { PricingTreesApi } from './PricingTreesApi';
import { GupDisabledEnabled } from './GupDisabledEnabled';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "PricingTrees" of service "d365_metadata".
 */
export class PricingTrees<T extends DeSerializers = DefaultDeSerializers>
  extends Entity
  implements PricingTreesType<T>
{
  /**
   * Technical entity name for PricingTrees.
   */
  static override _entityName = 'PricingTrees';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the PricingTrees entity.
   */
  static _keys = ['dataAreaId', 'Name'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Status.
   * @nullable
   */
  declare status?: GupDisabledEnabled | null;
  /**
   * Is Single Tree.
   * @nullable
   */
  declare isSingleTree?: NoYes | null;
  /**
   * Enable Mandatory Check.
   * @nullable
   */
  declare enableMandatoryCheck?: NoYes | null;
  /**
   * Description.
   * @nullable
   */
  declare description?: DeserializedType<T, 'Edm.String'> | null;

  constructor(_entityApi: PricingTreesApi<T>) {
    super(_entityApi);
  }
}

export interface PricingTreesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  name: DeserializedType<T, 'Edm.String'>;
  status?: GupDisabledEnabled | null;
  isSingleTree?: NoYes | null;
  enableMandatoryCheck?: NoYes | null;
  description?: DeserializedType<T, 'Edm.String'> | null;
}
