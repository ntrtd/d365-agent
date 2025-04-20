/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationGrids } from './CompensationGrids';
import { CompensationGridsRequestBuilder } from './CompensationGridsRequestBuilder';
import { CurrenciesApi } from './CurrenciesApi';
import { CompensationReferencePointsApi } from './CompensationReferencePointsApi';
import { CompensationStructuresApi } from './CompensationStructuresApi';
import { CompFixedPlanTablesApi } from './CompFixedPlanTablesApi';
import { PayIntV1CompFixedPlanTablesApi } from './PayIntV1CompFixedPlanTablesApi';
import { CompensationStructuresDualWriteV2Api } from './CompensationStructuresDualWriteV2Api';
import { HcmCompensationType } from './HcmCompensationType';
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
  OneToOneLink,
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CompensationGridsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CompensationGrids<DeSerializersT>, DeSerializersT>
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
  ): CompensationGridsApi<DeSerializersT> {
    return new CompensationGridsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link compensationCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_CURRENCY: OneToOneLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationReferencePoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REFERENCE_POINT: OneToOneLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES: OneToManyLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToManyLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1CompFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_COMP_FIXED_PLAN_TABLE: OneToManyLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      PayIntV1CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructuresV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES_V_2: OneToManyLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresDualWriteV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CurrenciesApi<DeSerializersT>,
      CompensationReferencePointsApi<DeSerializersT>,
      CompensationStructuresApi<DeSerializersT>,
      CompFixedPlanTablesApi<DeSerializersT>,
      PayIntV1CompFixedPlanTablesApi<DeSerializersT>,
      CompensationStructuresDualWriteV2Api<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_CURRENCY: new OneToOneLink(
        'CompensationCurrency',
        this,
        linkedApis[0]
      ),
      COMPENSATION_REFERENCE_POINT: new OneToOneLink(
        'CompensationReferencePoint',
        this,
        linkedApis[1]
      ),
      COMPENSATION_STRUCTURES: new OneToManyLink(
        'CompensationStructures',
        this,
        linkedApis[2]
      ),
      COMP_FIXED_PLAN_TABLE: new OneToManyLink(
        'CompFixedPlanTable',
        this,
        linkedApis[3]
      ),
      PAY_INT_V_1_COMP_FIXED_PLAN_TABLE: new OneToManyLink(
        'PayIntV1CompFixedPlanTable',
        this,
        linkedApis[4]
      ),
      COMPENSATION_STRUCTURES_V_2: new OneToManyLink(
        'CompensationStructuresV2',
        this,
        linkedApis[5]
      )
    };
    return this;
  }

  entityConstructor = CompensationGrids;

  requestBuilder(): CompensationGridsRequestBuilder<DeSerializersT> {
    return new CompensationGridsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompensationGrids<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<CompensationGrids<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<CompensationGrids<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof CompensationGrids,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationGrids,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationGrids<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GRID_ID: OrderableEdmTypeField<
      CompensationGrids<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    CURRENCY: OrderableEdmTypeField<
      CompensationGrids<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationGrids<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    REFERENCE_SETUP: OrderableEdmTypeField<
      CompensationGrids<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      CompensationGrids<DeSerializers>,
      DeSerializersT,
      HcmCompensationType,
      true,
      true
    >;
    EXPIRATION_DATE: OrderableEdmTypeField<
      CompensationGrids<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    EFFECTIVE_DATE: OrderableEdmTypeField<
      CompensationGrids<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationCurrency} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_CURRENCY: OneToOneLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CurrenciesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationReferencePoint} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REFERENCE_POINT: OneToOneLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES: OneToManyLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMP_FIXED_PLAN_TABLE: OneToManyLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link payIntV1CompFixedPlanTable} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PAY_INT_V_1_COMP_FIXED_PLAN_TABLE: OneToManyLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      PayIntV1CompFixedPlanTablesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructuresV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES_V_2: OneToManyLink<
      CompensationGrids<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresDualWriteV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationGrids<DeSerializers>>;
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
         * Static representation of the {@link gridId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRID_ID: fieldBuilder.buildEdmTypeField('GridId', 'Edm.String', false),
        /**
         * Static representation of the {@link currency} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CURRENCY: fieldBuilder.buildEdmTypeField(
          'Currency',
          'Edm.String',
          true
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
         * Static representation of the {@link referenceSetup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_SETUP: fieldBuilder.buildEdmTypeField(
          'ReferenceSetup',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', HcmCompensationType, true),
        /**
         * Static representation of the {@link expirationDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXPIRATION_DATE: fieldBuilder.buildEdmTypeField(
          'ExpirationDate',
          'Edm.DateTimeOffset',
          false
        ),
        /**
         * Static representation of the {@link effectiveDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EFFECTIVE_DATE: fieldBuilder.buildEdmTypeField(
          'EffectiveDate',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationGrids)
      };
    }

    return this._schema;
  }
}
