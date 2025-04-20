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
import type { LedgerAccountAliasesApi } from './LedgerAccountAliasesApi';
import { DimensionAliasType } from './DimensionAliasType';
import {
  DimensionCombinations,
  DimensionCombinationsType
} from './DimensionCombinations';
import { LegalEntities, LegalEntitiesType } from './LegalEntities';
import { SystemUsers, SystemUsersType } from './SystemUsers';
import {
  DimensionAttributes,
  DimensionAttributesType
} from './DimensionAttributes';
import { UserGroups, UserGroupsType } from './UserGroups';

/**
 * This class represents the entity "LedgerAccountAliases" of service "d365_metadata".
 */
export class LedgerAccountAliases<
    T extends DeSerializers = DefaultDeSerializers
  >
  extends Entity
  implements LedgerAccountAliasesType<T>
{
  /**
   * Technical entity name for LedgerAccountAliases.
   */
  static override _entityName = 'LedgerAccountAliases';
  /**
   * Default url path for the according service.
   */
  static override _defaultBasePath = '/';
  /**
   * All key fields of the LedgerAccountAliases entity.
   */
  static _keys = ['Name', 'AliasType', 'UserInfo'];
  /**
   * Name.
   */
  declare name: DeserializedType<T, 'Edm.String'>;
  /**
   * Alias Type.
   * @nullable
   */
  declare aliasType?: DimensionAliasType | null;
  /**
   * User Info.
   */
  declare userInfo: DeserializedType<T, 'Edm.String'>;
  /**
   * Dimension Attribute Name.
   * @nullable
   */
  declare dimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Legal Entity Id.
   * @nullable
   */
  declare legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * Dimension Attribute Value Combination Display Value.
   * @nullable
   */
  declare dimensionAttributeValueCombinationDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * Dimension Attribute Value Combination Account Structure.
   * @nullable
   */
  declare dimensionAttributeValueCombinationAccountStructure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  /**
   * User Group Info.
   * @nullable
   */
  declare userGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  /**
   * One-to-one navigation property to the {@link DimensionCombinations} entity.
   */
  declare dimensionCombination?: DimensionCombinations<T> | null;
  /**
   * One-to-one navigation property to the {@link LegalEntities} entity.
   */
  declare legalEntity?: LegalEntities<T> | null;
  /**
   * One-to-one navigation property to the {@link SystemUsers} entity.
   */
  declare systemUser?: SystemUsers<T> | null;
  /**
   * One-to-one navigation property to the {@link DimensionAttributes} entity.
   */
  declare dimensionAttribute?: DimensionAttributes<T> | null;
  /**
   * One-to-one navigation property to the {@link UserGroups} entity.
   */
  declare userGroup?: UserGroups<T> | null;

  constructor(_entityApi: LedgerAccountAliasesApi<T>) {
    super(_entityApi);
  }
}

export interface LedgerAccountAliasesType<
  T extends DeSerializers = DefaultDeSerializers
> {
  name: DeserializedType<T, 'Edm.String'>;
  aliasType?: DimensionAliasType | null;
  userInfo: DeserializedType<T, 'Edm.String'>;
  dimensionAttributeName?: DeserializedType<T, 'Edm.String'> | null;
  legalEntityId?: DeserializedType<T, 'Edm.String'> | null;
  dimensionAttributeValueCombinationDisplayValue?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  dimensionAttributeValueCombinationAccountStructure?: DeserializedType<
    T,
    'Edm.String'
  > | null;
  userGroupInfo?: DeserializedType<T, 'Edm.String'> | null;
  dimensionCombination?: DimensionCombinationsType<T> | null;
  legalEntity?: LegalEntitiesType<T> | null;
  systemUser?: SystemUsersType<T> | null;
  dimensionAttribute?: DimensionAttributesType<T> | null;
  userGroup?: UserGroupsType<T> | null;
}
