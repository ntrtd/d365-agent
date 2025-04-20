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
import type { CustomerChangeProposalFieldEnablementsApi } from './CustomerChangeProposalFieldEnablementsApi';
import { CustTableChangeProposalField } from './CustTableChangeProposalField';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "CustomerChangeProposalFieldEnablements" of service "d365_metadata".
 */
export class CustomerChangeProposalFieldEnablements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements CustomerChangeProposalFieldEnablementsType<T>
{
  /**
   * Technical entity name for CustomerChangeProposalFieldEnablements.
   */
  static override _entityName = 'CustomerChangeProposalFieldEnablements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the CustomerChangeProposalFieldEnablements entity.
   */
  static _keys = ['dataAreaId', 'Field'];
  /**
   * Data Area Id.
   */
  declare dataAreaId: DeserializedType<T, 'Edm.String'>;
  /**
   * Field.
   * @nullable
   */
  declare field?: CustTableChangeProposalField | null;
  /**
   * Is Enabled.
   * @nullable
   */
  declare isEnabled?: NoYes | null;

  constructor(_entityApi: CustomerChangeProposalFieldEnablementsApi<T>) {
    super(_entityApi);
  }
}

export interface CustomerChangeProposalFieldEnablementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  field?: CustTableChangeProposalField | null;
  isEnabled?: NoYes | null;
}
