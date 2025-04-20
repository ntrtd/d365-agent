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
import type { VendorChangeProposalFieldEnablementsApi } from './VendorChangeProposalFieldEnablementsApi';
import { VendTableChangeProposalField } from './VendTableChangeProposalField';
import { NoYes } from './NoYes';

/**
 * This class represents the entity "VendorChangeProposalFieldEnablements" of service "d365_metadata".
 */
export class VendorChangeProposalFieldEnablements<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements VendorChangeProposalFieldEnablementsType<T>
{
  /**
   * Technical entity name for VendorChangeProposalFieldEnablements.
   */
  static override _entityName = 'VendorChangeProposalFieldEnablements';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the VendorChangeProposalFieldEnablements entity.
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
  declare field?: VendTableChangeProposalField | null;
  /**
   * Is Enabled.
   * @nullable
   */
  declare isEnabled?: NoYes | null;

  constructor(_entityApi: VendorChangeProposalFieldEnablementsApi<T>) {
    super(_entityApi);
  }
}

export interface VendorChangeProposalFieldEnablementsType<
  T extends DeSerializers = DefaultDeSerializers
> {
  dataAreaId: DeserializedType<T, 'Edm.String'>;
  field?: VendTableChangeProposalField | null;
  isEnabled?: NoYes | null;
}
