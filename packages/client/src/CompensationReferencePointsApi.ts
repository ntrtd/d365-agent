/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { CompensationReferencePoints } from './CompensationReferencePoints';
import { CompensationReferencePointsRequestBuilder } from './CompensationReferencePointsRequestBuilder';
import { CompensationGridsApi } from './CompensationGridsApi';
import { DualWriteCompensationReferencePointSetupLinesApi } from './DualWriteCompensationReferencePointSetupLinesApi';
import { CompensationReferencePointSetupLinesApi } from './CompensationReferencePointSetupLinesApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class CompensationReferencePointsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<CompensationReferencePoints<DeSerializersT>, DeSerializersT>
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
  ): CompensationReferencePointsApi<DeSerializersT> {
    return new CompensationReferencePointsApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToManyLink<
      CompensationReferencePoints<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dualWriteCompensationReferencePointSetupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DUAL_WRITE_COMPENSATION_REFERENCE_POINT_SETUP_LINE: OneToManyLink<
      CompensationReferencePoints<DeSerializersT>,
      DeSerializersT,
      DualWriteCompensationReferencePointSetupLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationReferencePointSetupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REFERENCE_POINT_SETUP_LINE: OneToManyLink<
      CompensationReferencePoints<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointSetupLinesApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      CompensationGridsApi<DeSerializersT>,
      DualWriteCompensationReferencePointSetupLinesApi<DeSerializersT>,
      CompensationReferencePointSetupLinesApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      COMPENSATION_GRID: new OneToManyLink(
        'CompensationGrid',
        this,
        linkedApis[0]
      ),
      DUAL_WRITE_COMPENSATION_REFERENCE_POINT_SETUP_LINE: new OneToManyLink(
        'DualWriteCompensationReferencePointSetupLine',
        this,
        linkedApis[1]
      ),
      COMPENSATION_REFERENCE_POINT_SETUP_LINE: new OneToManyLink(
        'CompensationReferencePointSetupLine',
        this,
        linkedApis[2]
      )
    };
    return this;
  }

  entityConstructor = CompensationReferencePoints;

  requestBuilder(): CompensationReferencePointsRequestBuilder<DeSerializersT> {
    return new CompensationReferencePointsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    CompensationReferencePoints<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      CompensationReferencePoints<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    CompensationReferencePoints<DeSerializersT>,
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
    typeof CompensationReferencePoints,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        CompensationReferencePoints,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      CompensationReferencePoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_SETUP: OrderableEdmTypeField<
      CompensationReferencePoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      CompensationReferencePoints<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TYPE: EnumField<
      CompensationReferencePoints<DeSerializers>,
      DeSerializersT,
      HcmCompensationType,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationGrid} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_GRID: OneToManyLink<
      CompensationReferencePoints<DeSerializersT>,
      DeSerializersT,
      CompensationGridsApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link dualWriteCompensationReferencePointSetupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DUAL_WRITE_COMPENSATION_REFERENCE_POINT_SETUP_LINE: OneToManyLink<
      CompensationReferencePoints<DeSerializersT>,
      DeSerializersT,
      DualWriteCompensationReferencePointSetupLinesApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link compensationReferencePointSetupLine} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    COMPENSATION_REFERENCE_POINT_SETUP_LINE: OneToManyLink<
      CompensationReferencePoints<DeSerializersT>,
      DeSerializersT,
      CompensationReferencePointSetupLinesApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<CompensationReferencePoints<DeSerializers>>;
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
         * Static representation of the {@link referenceSetup} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_SETUP: fieldBuilder.buildEdmTypeField(
          'ReferenceSetup',
          'Edm.String',
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
         * Static representation of the {@link type} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TYPE: fieldBuilder.buildEnumField('Type', HcmCompensationType, true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', CompensationReferencePoints)
      };
    }

    return this._schema;
  }
}
