/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjExpenseCategoriesExport } from './ProjExpenseCategoriesExport';
import { ProjExpenseCategoriesExportRequestBuilder } from './ProjExpenseCategoriesExportRequestBuilder';
import { TrvExpType } from './TrvExpType';
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
export class ProjExpenseCategoriesExportApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ProjExpenseCategoriesExport<DeSerializersT>, DeSerializersT>
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
  ): ProjExpenseCategoriesExportApi<DeSerializersT> {
    return new ProjExpenseCategoriesExportApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProjExpenseCategoriesExport;

  requestBuilder(): ProjExpenseCategoriesExportRequestBuilder<DeSerializersT> {
    return new ProjExpenseCategoriesExportRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjExpenseCategoriesExport<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjExpenseCategoriesExport<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjExpenseCategoriesExport<DeSerializersT>,
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
    typeof ProjExpenseCategoriesExport,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjExpenseCategoriesExport,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjExpenseCategoriesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_TYPE: OrderableEdmTypeField<
      ProjExpenseCategoriesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    COST_TXT: OrderableEdmTypeField<
      ProjExpenseCategoriesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSACTION_CATEGORY_ID: OrderableEdmTypeField<
      ProjExpenseCategoriesExport<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EXP_TYPE: EnumField<
      ProjExpenseCategoriesExport<DeSerializers>,
      DeSerializersT,
      TrvExpType,
      true,
      true
    >;
    IS_INACTIVE: EnumField<
      ProjExpenseCategoriesExport<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProjExpenseCategoriesExport<DeSerializers>>;
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
         * Static representation of the {@link costType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TYPE: fieldBuilder.buildEdmTypeField(
          'CostType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link costTxt} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COST_TXT: fieldBuilder.buildEdmTypeField('CostTxt', 'Edm.String', true),
        /**
         * Static representation of the {@link transactionCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'TransactionCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link expType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXP_TYPE: fieldBuilder.buildEnumField('ExpType', TrvExpType, true),
        /**
         * Static representation of the {@link isInactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_INACTIVE: fieldBuilder.buildEnumField('IsInactive', NoYes, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjExpenseCategoriesExport)
      };
    }

    return this._schema;
  }
}
