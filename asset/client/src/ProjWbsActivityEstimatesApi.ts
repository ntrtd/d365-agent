/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProjWbsActivityEstimates } from './ProjWbsActivityEstimates';
import { ProjWbsActivityEstimatesRequestBuilder } from './ProjWbsActivityEstimatesRequestBuilder';
import { ProjectCategoryEntitiesApi } from './ProjectCategoryEntitiesApi';
import { QuotationProjTransType } from './QuotationProjTransType';
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
export class ProjWbsActivityEstimatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProjWbsActivityEstimates<DeSerializersT>, DeSerializersT>
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
  ): ProjWbsActivityEstimatesApi<DeSerializersT> {
    return new ProjWbsActivityEstimatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link projectCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORIES: OneToOneLink<
      ProjWbsActivityEstimates<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [ProjectCategoryEntitiesApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      PROJECT_CATEGORIES: new OneToOneLink(
        'ProjectCategories',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = ProjWbsActivityEstimates;

  requestBuilder(): ProjWbsActivityEstimatesRequestBuilder<DeSerializersT> {
    return new ProjWbsActivityEstimatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProjWbsActivityEstimates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ProjWbsActivityEstimates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ProjWbsActivityEstimates<DeSerializersT>,
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
    typeof ProjWbsActivityEstimates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProjWbsActivityEstimates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PROJECT_ID: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WBS_ID: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TRANSACTION_TYPE: EnumField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      QuotationProjTransType,
      true,
      true
    >;
    CATEGORY: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_CATEGORY: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_NUMBER: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_CATEGORY: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_PROPERTY: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_COST_PRICE: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    UNIT_SALES_PRICE: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TOTAL_SALES_PRICE: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TOTAL_COST_PRICE: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TASK_NAME: OrderableEdmTypeField<
      ProjWbsActivityEstimates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link projectCategories} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PROJECT_CATEGORIES: OneToOneLink<
      ProjWbsActivityEstimates<DeSerializersT>,
      DeSerializersT,
      ProjectCategoryEntitiesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<ProjWbsActivityEstimates<DeSerializers>>;
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
         * Static representation of the {@link projectId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PROJECT_ID: fieldBuilder.buildEdmTypeField(
          'ProjectId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link wbsId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WBS_ID: fieldBuilder.buildEdmTypeField('WBSId', 'Edm.String', false),
        /**
         * Static representation of the {@link transactionType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSACTION_TYPE: fieldBuilder.buildEnumField(
          'TransactionType',
          QuotationProjTransType,
          true
        ),
        /**
         * Static representation of the {@link category} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CATEGORY: fieldBuilder.buildEdmTypeField(
          'Category',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link resourceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_CATEGORY: fieldBuilder.buildEdmTypeField(
          'ResourceCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link itemNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_NUMBER: fieldBuilder.buildEdmTypeField(
          'ItemNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link salesCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_CATEGORY: fieldBuilder.buildEdmTypeField(
          'SalesCategory',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineProperty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_PROPERTY: fieldBuilder.buildEdmTypeField(
          'LineProperty',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitCostPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_COST_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitCostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link unitSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'UnitSalesPrice',
          'Edm.Decimal',
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
         * Static representation of the {@link totalSalesPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_SALES_PRICE: fieldBuilder.buildEdmTypeField(
          'TotalSalesPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link totalCostPrice} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TOTAL_COST_PRICE: fieldBuilder.buildEdmTypeField(
          'TotalCostPrice',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link taskName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TASK_NAME: fieldBuilder.buildEdmTypeField(
          'TaskName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProjWbsActivityEstimates)
      };
    }

    return this._schema;
  }
}
