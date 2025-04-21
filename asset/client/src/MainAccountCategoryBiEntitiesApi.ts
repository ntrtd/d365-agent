/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MainAccountCategoryBiEntities } from './MainAccountCategoryBiEntities';
import { MainAccountCategoryBiEntitiesRequestBuilder } from './MainAccountCategoryBiEntitiesRequestBuilder';
import { DimensionLedgerAccCategoryAccountType } from './DimensionLedgerAccCategoryAccountType';
import { NoYes } from './NoYes';
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
  EnumField
} from '@sap-cloud-sdk/odata-v4';
export class MainAccountCategoryBiEntitiesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<MainAccountCategoryBiEntities<DeSerializersT>, DeSerializersT>
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
  ): MainAccountCategoryBiEntitiesApi<DeSerializersT> {
    return new MainAccountCategoryBiEntitiesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MainAccountCategoryBiEntities;

  requestBuilder(): MainAccountCategoryBiEntitiesRequestBuilder<DeSerializersT> {
    return new MainAccountCategoryBiEntitiesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    MainAccountCategoryBiEntities<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      MainAccountCategoryBiEntities<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MainAccountCategoryBiEntities<DeSerializersT>,
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
    typeof MainAccountCategoryBiEntities,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MainAccountCategoryBiEntities,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    ACCOUNT_CATEGORY_REF: OrderableEdmTypeField<
      MainAccountCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      MainAccountCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      DimensionLedgerAccCategoryAccountType,
      true,
      true
    >;
    SYS_REC_VERSION: OrderableEdmTypeField<
      MainAccountCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CLOSED: EnumField<
      MainAccountCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    SOURCE_KEY: OrderableEdmTypeField<
      MainAccountCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      MainAccountCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ACCOUNT_CATEGORY_DISPLAY_ORDER: OrderableEdmTypeField<
      MainAccountCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ACCOUNT_CATEGORY: OrderableEdmTypeField<
      MainAccountCategoryBiEntities<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MainAccountCategoryBiEntities<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link accountCategoryRef} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CATEGORY_REF: fieldBuilder.buildEdmTypeField(
          'AccountCategoryRef',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          DimensionLedgerAccCategoryAccountType,
          true
        ),
        /**
         * Static representation of the {@link sysRecVersion} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SYS_REC_VERSION: fieldBuilder.buildEdmTypeField(
          'SysRecVersion',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link closed} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLOSED: fieldBuilder.buildEnumField('Closed', NoYes, true),
        /**
         * Static representation of the {@link sourceKey} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SOURCE_KEY: fieldBuilder.buildEdmTypeField(
          'SourceKey',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link description} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'Description',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link accountCategoryDisplayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CATEGORY_DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'AccountCategoryDisplayOrder',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link accountCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CATEGORY: fieldBuilder.buildEdmTypeField(
          'AccountCategory',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MainAccountCategoryBiEntities)
      };
    }

    return this._schema;
  }
}
