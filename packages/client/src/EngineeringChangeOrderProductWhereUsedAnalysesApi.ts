/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EngineeringChangeOrderProductWhereUsedAnalyses } from './EngineeringChangeOrderProductWhereUsedAnalyses';
import { EngineeringChangeOrderProductWhereUsedAnalysesRequestBuilder } from './EngineeringChangeOrderProductWhereUsedAnalysesRequestBuilder';
import { ProductsV2Api } from './ProductsV2Api';
import { EngineeringChangeOrderProductsApi } from './EngineeringChangeOrderProductsApi';
import { EngineeringChangeOrderProductsV2Api } from './EngineeringChangeOrderProductsV2Api';
import { EngineeringChangeOrderProductsV3Api } from './EngineeringChangeOrderProductsV3Api';
import { WorkersApi } from './WorkersApi';
import { EngChgEcmWhereUsedStatusType } from './EngChgEcmWhereUsedStatusType';
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
export class EngineeringChangeOrderProductWhereUsedAnalysesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT
    >
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
  ): EngineeringChangeOrderProductWhereUsedAnalysesApi<DeSerializersT> {
    return new EngineeringChangeOrderProductWhereUsedAnalysesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link usedInProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USED_IN_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reviewerWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REVIEWER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      ProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsApi<DeSerializersT>,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>,
      WorkersApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      USED_IN_PRODUCT: new OneToOneLink('UsedInProduct', this, linkedApis[0]),
      ENGINEERING_CHANGE_ORDER_PRODUCT: new OneToOneLink(
        'EngineeringChangeOrderProduct',
        this,
        linkedApis[1]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: new OneToOneLink(
        'EngineeringChangeOrderProductV2',
        this,
        linkedApis[2]
      ),
      ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: new OneToOneLink(
        'EngineeringChangeOrderProductV3',
        this,
        linkedApis[3]
      ),
      REVIEWER_WORKER: new OneToOneLink('ReviewerWorker', this, linkedApis[4])
    };
    return this;
  }

  entityConstructor = EngineeringChangeOrderProductWhereUsedAnalyses;

  requestBuilder(): EngineeringChangeOrderProductWhereUsedAnalysesRequestBuilder<DeSerializersT> {
    return new EngineeringChangeOrderProductWhereUsedAnalysesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
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
    typeof EngineeringChangeOrderProductWhereUsedAnalyses,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        EngineeringChangeOrderProductWhereUsedAnalyses,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    USED_IN_PRODUCT_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ENGINEERING_CHANGE_ORDER_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REVIEWER_PERSONNEL_NUMBER: OrderableEdmTypeField<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USED_PRODUCT_ANALYSIS_STATUS: EnumField<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializers>,
      DeSerializersT,
      EngChgEcmWhereUsedStatusType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link usedInProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    USED_IN_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      ProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProduct} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_2: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link engineeringChangeOrderProductV3} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    ENGINEERING_CHANGE_ORDER_PRODUCT_V_3: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      EngineeringChangeOrderProductsV3Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link reviewerWorker} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REVIEWER_WORKER: OneToOneLink<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializersT>,
      DeSerializersT,
      WorkersApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<
      EngineeringChangeOrderProductWhereUsedAnalyses<DeSerializers>
    >;
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
         * Static representation of the {@link engineeringChangeOrderProductLineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_PRODUCT_LINE_NUMBER:
          fieldBuilder.buildEdmTypeField(
            'EngineeringChangeOrderProductLineNumber',
            'Edm.Decimal',
            false
          ),
        /**
         * Static representation of the {@link usedInProductNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USED_IN_PRODUCT_NUMBER: fieldBuilder.buildEdmTypeField(
          'UsedInProductNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link engineeringChangeOrderNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENGINEERING_CHANGE_ORDER_NUMBER: fieldBuilder.buildEdmTypeField(
          'EngineeringChangeOrderNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link reviewerPersonnelNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REVIEWER_PERSONNEL_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReviewerPersonnelNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link usedProductAnalysisStatus} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USED_PRODUCT_ANALYSIS_STATUS: fieldBuilder.buildEnumField(
          'UsedProductAnalysisStatus',
          EngChgEcmWhereUsedStatusType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          EngineeringChangeOrderProductWhereUsedAnalyses
        )
      };
    }

    return this._schema;
  }
}
