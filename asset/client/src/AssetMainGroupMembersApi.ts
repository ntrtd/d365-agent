/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { AssetMainGroupMembers } from './AssetMainGroupMembers';
import { AssetMainGroupMembersRequestBuilder } from './AssetMainGroupMembersRequestBuilder';
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
export class AssetMainGroupMembersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<AssetMainGroupMembers<DeSerializersT>, DeSerializersT>
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
  ): AssetMainGroupMembersApi<DeSerializersT> {
    return new AssetMainGroupMembersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = AssetMainGroupMembers;

  requestBuilder(): AssetMainGroupMembersRequestBuilder<DeSerializersT> {
    return new AssetMainGroupMembersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    AssetMainGroupMembers<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<AssetMainGroupMembers<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    AssetMainGroupMembers<DeSerializersT>,
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
    typeof AssetMainGroupMembers,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        AssetMainGroupMembers,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      AssetMainGroupMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FA_GROUP: OrderableEdmTypeField<
      AssetMainGroupMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE_MODEL: OrderableEdmTypeField<
      AssetMainGroupMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DEPRECIATION_GROUP: OrderableEdmTypeField<
      AssetMainGroupMembers<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SERVICE_LIFE_BY_RATE: EnumField<
      AssetMainGroupMembers<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<AssetMainGroupMembers<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link dataAreaId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DATA_AREA_ID: fieldBuilder.buildEdmTypeField(
          'dataAreaId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link faGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FA_GROUP: fieldBuilder.buildEdmTypeField(
          'FAGroup',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link valueModel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE_MODEL: fieldBuilder.buildEdmTypeField(
          'ValueModel',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link depreciationGroup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEPRECIATION_GROUP: fieldBuilder.buildEdmTypeField(
          'DepreciationGroup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link serviceLifeByRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SERVICE_LIFE_BY_RATE: fieldBuilder.buildEnumField(
          'ServiceLifeByRate',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', AssetMainGroupMembers)
      };
    }

    return this._schema;
  }
}
