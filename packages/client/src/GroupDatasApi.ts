/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { GroupDatas } from './GroupDatas';
import { GroupDatasRequestBuilder } from './GroupDatasRequestBuilder';
import { WarrantyGroupStatusType } from './WarrantyGroupStatusType';
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
export class GroupDatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<GroupDatas<DeSerializersT>, DeSerializersT>
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
  ): GroupDatasApi<DeSerializersT> {
    return new GroupDatasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = GroupDatas;

  requestBuilder(): GroupDatasRequestBuilder<DeSerializersT> {
    return new GroupDatasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    GroupDatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<GroupDatas<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<GroupDatas<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof GroupDatas, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(GroupDatas, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    GROUP_NAME: OrderableEdmTypeField<
      GroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WARRANTY_DATA_LINE_STATUS: EnumField<
      GroupDatas<DeSerializers>,
      DeSerializersT,
      WarrantyGroupStatusType,
      true,
      true
    >;
    LINE_IDENTIFIER: OrderableEdmTypeField<
      GroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DISPLAY_ORDER: OrderableEdmTypeField<
      GroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PRODUCT_NUMBER: OrderableEdmTypeField<
      GroupDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<GroupDatas<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link groupName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GROUP_NAME: fieldBuilder.buildEdmTypeField(
          'GroupName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warrantyDataLineStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WARRANTY_DATA_LINE_STATUS: fieldBuilder.buildEnumField(
          'WarrantyDataLineStatus',
          WarrantyGroupStatusType,
          true
        ),
        /**
         * Static representation of the {@link lineIdentifier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_IDENTIFIER: fieldBuilder.buildEdmTypeField(
          'LineIdentifier',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link displayOrder} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISPLAY_ORDER: fieldBuilder.buildEdmTypeField(
          'DisplayOrder',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link productNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ProductNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', GroupDatas)
      };
    }

    return this._schema;
  }
}
