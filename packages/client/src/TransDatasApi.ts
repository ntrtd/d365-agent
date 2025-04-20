/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransDatas } from './TransDatas';
import { TransDatasRequestBuilder } from './TransDatasRequestBuilder';
import { OffTableAllRu } from './OffTableAllRu';
import { ModuleCustVend } from './ModuleCustVend';
import { OffInvRelationTypeAllTable_Ru } from './OffInvRelationTypeAllTable_Ru';
import { OffPositionRu } from './OffPositionRu';
import { OffReportTypeRu } from './OffReportTypeRu';
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
export class TransDatasApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TransDatas<DeSerializersT>, DeSerializersT>
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
  ): TransDatasApi<DeSerializersT> {
    return new TransDatasApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = TransDatas;

  requestBuilder(): TransDatasRequestBuilder<DeSerializersT> {
    return new TransDatasRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransDatas<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TransDatas<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<TransDatas<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof TransDatas, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(TransDatas, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_CODE: EnumField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      OffTableAllRu,
      true,
      true
    >;
    MODULE: EnumField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      ModuleCustVend,
      true,
      true
    >;
    ACCOUNT_RELATION: OrderableEdmTypeField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAREHOUSE: OrderableEdmTypeField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ASSOCIATION_WITH_WAREHOUSE: EnumField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      OffInvRelationTypeAllTable_Ru,
      true,
      true
    >;
    EMPLOYEE_NAME: OrderableEdmTypeField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFICIAL_SESSION: OrderableEdmTypeField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSITION: EnumField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      OffPositionRu,
      true,
      true
    >;
    REPORT_TYPE: EnumField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      OffReportTypeRu,
      true,
      true
    >;
    TITLE: OrderableEdmTypeField<
      TransDatas<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<TransDatas<DeSerializers>>;
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
         * Static representation of the {@link accountCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_CODE: fieldBuilder.buildEnumField(
          'AccountCode',
          OffTableAllRu,
          true
        ),
        /**
         * Static representation of the {@link module} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODULE: fieldBuilder.buildEnumField('Module', ModuleCustVend, true),
        /**
         * Static representation of the {@link accountRelation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_RELATION: fieldBuilder.buildEdmTypeField(
          'AccountRelation',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link warehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAREHOUSE: fieldBuilder.buildEdmTypeField(
          'Warehouse',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link associationWithWarehouse} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSOCIATION_WITH_WAREHOUSE: fieldBuilder.buildEnumField(
          'AssociationWithWarehouse',
          OffInvRelationTypeAllTable_Ru,
          true
        ),
        /**
         * Static representation of the {@link employeeName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMPLOYEE_NAME: fieldBuilder.buildEdmTypeField(
          'EmployeeName',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link officialSession} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFICIAL_SESSION: fieldBuilder.buildEdmTypeField(
          'OfficialSession',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link position} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION: fieldBuilder.buildEnumField('Position', OffPositionRu, true),
        /**
         * Static representation of the {@link reportType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REPORT_TYPE: fieldBuilder.buildEnumField(
          'ReportType',
          OffReportTypeRu,
          true
        ),
        /**
         * Static representation of the {@link title} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TITLE: fieldBuilder.buildEdmTypeField('Title', 'Edm.String', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransDatas)
      };
    }

    return this._schema;
  }
}
