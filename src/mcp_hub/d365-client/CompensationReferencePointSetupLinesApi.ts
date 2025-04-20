/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationReferencePointSetupLines } from './CompensationReferencePointSetupLines';
import { CompensationReferencePointSetupLinesRequestBuilder } from './CompensationReferencePointSetupLinesRequestBuilder';
import { CompensationStructuresApi } from './CompensationStructuresApi';
import { CompensationStructuresDualWriteV2Api } from './CompensationStructuresDualWriteV2Api';
import { CompensationReferencePointsApi } from './CompensationReferencePointsApi';
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
  OneToManyLink,
  OneToOneLink
} from '@sap-cloud-sdk/odata-v4';
export class CompensationReferencePointSetupLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      CompensationReferencePointSetupLines<DeSerializersT>,
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
  ): CompensationReferencePointSetupLinesApi<DeSerializersT> {
    return new CompensationReferencePointSetupLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES: OneToManyLink<
      CompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructuresV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES_V_2: OneToManyLink<
      CompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresDualWriteV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hrcCompRefPointSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HRC_COMP_REF_POINT_SETUP: OneToOneLink<
      CompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationStructuresApi<DeSerializersT>,
      CompensationStructuresDualWriteV2Api<DeSerializersT>,
      CompensationReferencePointsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_STRUCTURES: new OneToManyLink(
        'CompensationStructures',
        this,
        linkedApis[0]
      ),
      COMPENSATION_STRUCTURES_V_2: new OneToManyLink(
        'CompensationStructuresV2',
        this,
        linkedApis[1]
      ),
      HRC_COMP_REF_POINT_SETUP: new OneToOneLink(
        'HRCCompRefPointSetup',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = CompensationReferencePointSetupLines;

  requestBuilder(): CompensationReferencePointSetupLinesRequestBuilder<DeSerializersT> {
    return new CompensationReferencePointSetupLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    CompensationReferencePointSetupLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationReferencePointSetupLines<DeSerializersT>,
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
    typeof CompensationReferencePointSetupLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationReferencePointSetupLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REF_POINT_SETUP_ID: OrderableEdmTypeField<
      CompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      CompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    REF_POINT_ID: OrderableEdmTypeField<
      CompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationReferencePointSetupLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructures} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES: OneToManyLink<
      CompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationStructuresV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_STRUCTURES_V_2: OneToManyLink<
      CompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT,
      CompensationStructuresDualWriteV2Api<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link hrcCompRefPointSetup} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    HRC_COMP_REF_POINT_SETUP: OneToOneLink<
      CompensationReferencePointSetupLines<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationReferencePointSetupLines<DeSerializers>>;
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
         * Static representation of the {@link refPointSetupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_POINT_SETUP_ID: fieldBuilder.buildEdmTypeField(
          'RefPointSetupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link refPointId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REF_POINT_ID: fieldBuilder.buildEdmTypeField(
          'RefPointId',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationReferencePointSetupLines)
      };
    }

    return this._schema;
  }
}
