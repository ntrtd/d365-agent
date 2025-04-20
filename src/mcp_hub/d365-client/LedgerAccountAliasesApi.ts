/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LedgerAccountAliases } from './LedgerAccountAliases';
import { LedgerAccountAliasesRequestBuilder } from './LedgerAccountAliasesRequestBuilder';
import { DimensionCombinationsApi } from './DimensionCombinationsApi';
import { LegalEntitiesApi } from './LegalEntitiesApi';
import { SystemUsersApi } from './SystemUsersApi';
import { DimensionAttributesApi } from './DimensionAttributesApi';
import { UserGroupsApi } from './UserGroupsApi';
import { DimensionAliasType } from './DimensionAliasType';
import {
  CustomField,
  defaultDeSerializers,
  DefaultDeSerializers,
  DeSerializers,
  AllFields,
  entityBuilder,
  EntityBuilderType,
  EntityApi,
  FieldBuilder,
  OrderableEdmTypeField,
  EnumField,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class LedgerAccountAliasesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<LedgerAccountAliases<DeSerializersT>, DeSerializersT>
{
  public deSerializers: DeSerializersT;

  private constructor(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ) {
    this.deSerializers = deSerializers;
  }

  /**
   * Do not use this method or the constructor directly.
   * Use the service function as described in the documentation to get an API instance.
   */
  public static _privateFactory<
    DeSerializersT extends DeSerializers = DefaultDeSerializers
  >(
    deSerializers: DeSerializersT = defaultDeSerializers as any
  ): LedgerAccountAliasesApi<DeSerializersT> {
    return new LedgerAccountAliasesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_ATTRIBUTE: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_GROUP: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      UserGroupsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      DimensionCombinationsApi<DeSerializersT>,
      LegalEntitiesApi<DeSerializersT>,
      SystemUsersApi<DeSerializersT>,
      DimensionAttributesApi<DeSerializersT>,
      UserGroupsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_COMBINATION: new OneToOneLink(
        'DimensionCombination',
        this,
        linkedApis[0]
      ),
      LEGAL_ENTITY: new OneToOneLink('LegalEntity', this, linkedApis[1]),
      SYSTEM_USER: new OneToOneLink('SystemUser', this, linkedApis[2]),
      DIMENSION_ATTRIBUTE: new OneToOneLink(
        'DimensionAttribute',
        this,
        linkedApis[3]
      ),
      USER_GROUP: new OneToOneLink('UserGroup', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = LedgerAccountAliases;

  requestBuilder(): LedgerAccountAliasesRequestBuilder<DeSerializersT> {
    return new LedgerAccountAliasesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    LedgerAccountAliases<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<LedgerAccountAliases<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LedgerAccountAliases<DeSerializersT>,
    DeSerializersT,
    NullableT
  > {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof LedgerAccountAliases,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LedgerAccountAliases,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    NAME: OrderableEdmTypeField<
      LedgerAccountAliases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALIAS_TYPE: EnumField<
      LedgerAccountAliases<DeSerializers>,
      DeSerializersT,
      DimensionAliasType,
      true,
      true
    >;
    USER_INFO: OrderableEdmTypeField<
      LedgerAccountAliases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_ATTRIBUTE_NAME: OrderableEdmTypeField<
      LedgerAccountAliases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_ID: OrderableEdmTypeField<
      LedgerAccountAliases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_ATTRIBUTE_VALUE_COMBINATION_DISPLAY_VALUE: OrderableEdmTypeField<
      LedgerAccountAliases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIMENSION_ATTRIBUTE_VALUE_COMBINATION_ACCOUNT_STRUCTURE: OrderableEdmTypeField<
      LedgerAccountAliases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USER_GROUP_INFO: OrderableEdmTypeField<
      LedgerAccountAliases<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionCombination} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_COMBINATION: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      DimensionCombinationsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link legalEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    LEGAL_ENTITY: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      LegalEntitiesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link systemUser} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    SYSTEM_USER: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      SystemUsersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionAttribute} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_ATTRIBUTE: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      DimensionAttributesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link userGroup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USER_GROUP: OneToOneLink<
      LedgerAccountAliases<DeSerializersT>,
      DeSerializersT,
      UserGroupsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LedgerAccountAliases<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link name} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NAME: fieldBuilder.buildEdmTypeField('Name', 'Edm.String', false),
        /**
         * Static representation of the {@link aliasType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ALIAS_TYPE: fieldBuilder.buildEnumField(
          'AliasType',
          DimensionAliasType,
          true
        ),
        /**
         * Static representation of the {@link userInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_INFO: fieldBuilder.buildEdmTypeField(
          'UserInfo',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dimensionAttributeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_NAME: fieldBuilder.buildEdmTypeField(
          'DimensionAttributeName',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_ID: fieldBuilder.buildEdmTypeField(
          'LegalEntityId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link dimensionAttributeValueCombinationDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_VALUE_COMBINATION_DISPLAY_VALUE:
          fieldBuilder.buildEdmTypeField(
            'DimensionAttributeValueCombinationDisplayValue',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link dimensionAttributeValueCombinationAccountStructure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_ATTRIBUTE_VALUE_COMBINATION_ACCOUNT_STRUCTURE:
          fieldBuilder.buildEdmTypeField(
            'DimensionAttributeValueCombinationAccountStructure',
            'Edm.String',
            true
          ),
        /**
         * Static representation of the {@link userGroupInfo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USER_GROUP_INFO: fieldBuilder.buildEdmTypeField(
          'UserGroupInfo',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LedgerAccountAliases)
      };
    }

    return this._schema;
  }
}
