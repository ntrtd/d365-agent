/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LtmDocumentClassificationSalesPoints } from './LtmDocumentClassificationSalesPoints';
import { LtmDocumentClassificationSalesPointsRequestBuilder } from './LtmDocumentClassificationSalesPointsRequestBuilder';
import { DimensionSetsApi } from './DimensionSetsApi';
import { LtmAccountType } from './LtmAccountType';
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
export class LtmDocumentClassificationSalesPointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      LtmDocumentClassificationSalesPoints<DeSerializersT>,
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
  ): LtmDocumentClassificationSalesPointsApi<DeSerializersT> {
    return new LtmDocumentClassificationSalesPointsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSetEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET_ENTITY: OneToOneLink<
      LtmDocumentClassificationSalesPoints<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DimensionSetsApi<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DIMENSION_SET_ENTITY: new OneToOneLink(
        'DimensionSetEntity',
        this,
        linkedApis[0]
      )
    };
    return this;
  }

  entityConstructor = LtmDocumentClassificationSalesPoints;

  requestBuilder(): LtmDocumentClassificationSalesPointsRequestBuilder<DeSerializersT> {
    return new LtmDocumentClassificationSalesPointsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    LtmDocumentClassificationSalesPoints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      LtmDocumentClassificationSalesPoints<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    LtmDocumentClassificationSalesPoints<DeSerializersT>,
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
    typeof LtmDocumentClassificationSalesPoints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        LtmDocumentClassificationSalesPoints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SALES_POINT_ID: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ACCOUNT_TYPE: EnumField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      LtmAccountType,
      true,
      true
    >;
    DOCUMENT_CLASSIFICATION_ID: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    NUMBER_SEQUENCE: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_CONCEPT_4: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_CONCEPT_1: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_CONCEPT_2: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_CONCEPT_3: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_3: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_2: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOTE_1: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      LtmDocumentClassificationSalesPoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSetEntity} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET_ENTITY: OneToOneLink<
      LtmDocumentClassificationSalesPoints<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<LtmDocumentClassificationSalesPoints<DeSerializers>>;
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
         * Static representation of the {@link salesPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SALES_POINT_ID: fieldBuilder.buildEdmTypeField(
          'SalesPointId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link accountType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ACCOUNT_TYPE: fieldBuilder.buildEnumField(
          'AccountType',
          LtmAccountType,
          true
        ),
        /**
         * Static representation of the {@link documentClassificationId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DOCUMENT_CLASSIFICATION_ID: fieldBuilder.buildEdmTypeField(
          'DocumentClassificationId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link numberSequence} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NUMBER_SEQUENCE: fieldBuilder.buildEdmTypeField(
          'NumberSequence',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printConcept4} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CONCEPT_4: fieldBuilder.buildEdmTypeField(
          'PrintConcept4',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printConcept1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CONCEPT_1: fieldBuilder.buildEdmTypeField(
          'PrintConcept1',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printConcept2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CONCEPT_2: fieldBuilder.buildEdmTypeField(
          'PrintConcept2',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printConcept3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CONCEPT_3: fieldBuilder.buildEdmTypeField(
          'PrintConcept3',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link note3} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_3: fieldBuilder.buildEdmTypeField('Note3', 'Edm.String', true),
        /**
         * Static representation of the {@link note2} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_2: fieldBuilder.buildEdmTypeField('Note2', 'Edm.String', true),
        /**
         * Static representation of the {@link note1} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOTE_1: fieldBuilder.buildEdmTypeField('Note1', 'Edm.String', true),
        /**
         * Static representation of the {@link defaultDimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DefaultDimensionDisplayValue',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', LtmDocumentClassificationSalesPoints)
      };
    }

    return this._schema;
  }
}
