/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationStructures } from './CompensationStructures';
import { CompensationStructuresRequestBuilder } from './CompensationStructuresRequestBuilder';
import { CompensationLevelsApi } from './CompensationLevelsApi';
import { CompensationGridsApi } from './CompensationGridsApi';
import { CompensationReferencePointSetupLinesApi } from './CompensationReferencePointSetupLinesApi';
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
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CompensationStructuresApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<CompensationStructures<DeSerializersT>, DeSerializersT>
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
  ): CompensationStructuresApi<DeSerializersT> {
    return new CompensationStructuresApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link compensationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVEL: OneToOneLink<
      CompensationStructures<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToOneLink<
      CompensationStructures<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link referencePointSetupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REFERENCE_POINT_SETUP_LINE: OneToOneLink<
      CompensationStructures<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointSetupLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationLevelsApi<DeSerializersT>,
      CompensationGridsApi<DeSerializersT>,
      CompensationReferencePointSetupLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_LEVEL: new OneToOneLink(
        'CompensationLevel',
        this,
        linkedApis[0]
      ),
      COMPENSATION_GRID: new OneToOneLink(
        'CompensationGrid',
        this,
        linkedApis[1]
      ),
      REFERENCE_POINT_SETUP_LINE: new OneToOneLink(
        'ReferencePointSetupLine',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = CompensationStructures;

  requestBuilder(): CompensationStructuresRequestBuilder<DeSerializersT> {
    return new CompensationStructuresRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompensationStructures<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationStructures<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationStructures<DeSerializersT>,
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
    typeof CompensationStructures,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationStructures,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    GRID: OrderableEdmTypeField<
      CompensationStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LEVEL_ID: OrderableEdmTypeField<
      CompensationStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_POINT: OrderableEdmTypeField<
      CompensationStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    AMOUNT: OrderableEdmTypeField<
      CompensationStructures<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REFERENCE_SETUP: OrderableEdmTypeField<
      CompensationStructures<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationLevel} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_LEVEL: OneToOneLink<
      CompensationStructures<DeSerializersT>,
      DeSerializersT,
      CompensationLevelsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToOneLink<
      CompensationStructures<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link referencePointSetupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    REFERENCE_POINT_SETUP_LINE: OneToOneLink<
      CompensationStructures<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointSetupLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationStructures<DeSerializers>>;
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
         * Static representation of the {@link grid} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        GRID: fieldBuilder.buildEdmTypeField('Grid', 'Edm.String', false),
        /**
         * Static representation of the {@link levelId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEVEL_ID: fieldBuilder.buildEdmTypeField(
          'LevelId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link referencePoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_POINT: fieldBuilder.buildEdmTypeField(
          'ReferencePoint',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link amount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AMOUNT: fieldBuilder.buildEdmTypeField('Amount', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link referenceSetup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_SETUP: fieldBuilder.buildEdmTypeField(
          'ReferenceSetup',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationStructures)
      };
    }

    return this._schema;
  }
}
