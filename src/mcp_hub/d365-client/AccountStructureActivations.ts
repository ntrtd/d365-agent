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
import type { AccountStructureActivationsApi } from './AccountStructureActivationsApi';
import { NoYes } from './NoYes';
import { AccountStructures, AccountStructuresType } from './AccountStructures';

/**
 * This class represents the entity "AccountStructureActivations" of service "d365_metadata".
 */
export class AccountStructureActivations<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements AccountStructureActivationsType<T>
{
  /**
   * Technical entity name for AccountStructureActivations.
   */
  static override _entityName = 'AccountStructureActivations';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the AccountStructureActivations entity.
   */
  static _keys = ['AccountStructure'];
  /**
   * Account Structure.
   */
  declare accountStructure: DeserializedType<T, 'Edm.String'>;
  /**
   * Do Activate.
   * @nullable
   */
  declare doActivate?: NoYes | null;
  /**
   * One-to-one navigation property to the {@link AccountStructures} entity.
   */
  declare ledgerAccountStructureActivationEntityRelatedRoleLedgerAccountStructureEntity?: AccountStructures<T> | null;

  constructor(_entityApi: AccountStructureActivationsApi<T>) {
    super(_entityApi);
  }
}

export interface AccountStructureActivationsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  accountStructure: DeserializedType<T, 'Edm.String'>;
  doActivate?: NoYes | null;
  ledgerAccountStructureActivationEntityRelatedRoleLedgerAccountStructureEntity?: AccountStructuresType<T> | null;
}
