/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionDefaultDimensionsDualWrite } from './PositionDefaultDimensionsDualWrite';
import { PositionDefaultDimensionsDualWriteRequestBuilder } from './PositionDefaultDimensionsDualWriteRequestBuilder';
import { JobPositionsDualWriteApi } from './JobPositionsDualWriteApi';
import { DimensionSetsApi } from './DimensionSetsApi';
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
export class PositionDefaultDimensionsDualWriteApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      PositionDefaultDimensionsDualWrite<DeSerializersT>,
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
  ): PositionDefaultDimensionsDualWriteApi<DeSerializersT> {
    return new PositionDefaultDimensionsDualWriteApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link jobPositionDualWrite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_POSITION_DUAL_WRITE: OneToOneLink<
      PositionDefaultDimensionsDualWrite<DeSerializersT>,
      DeSerializersT,
      JobPositionsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      PositionDefaultDimensionsDualWrite<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      JobPositionsDualWriteApi<DeSerializersT>,
      DimensionSetsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      JOB_POSITION_DUAL_WRITE: new OneToOneLink(
        'JobPositionDualWrite',
        this,
        linkedApis[0]
      ),
      DIMENSION_SET: new OneToOneLink('DimensionSet', this, linkedApis[1])
    };
    return this;
  }

  entityConstructor = PositionDefaultDimensionsDualWrite;

  requestBuilder(): PositionDefaultDimensionsDualWriteRequestBuilder<DeSerializersT> {
    return new PositionDefaultDimensionsDualWriteRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    PositionDefaultDimensionsDualWrite<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PositionDefaultDimensionsDualWrite<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PositionDefaultDimensionsDualWrite<DeSerializersT>,
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
    typeof PositionDefaultDimensionsDualWrite,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PositionDefaultDimensionsDualWrite,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PositionDefaultDimensionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    POSITION_ID: OrderableEdmTypeField<
      PositionDefaultDimensionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    DIMENSION_DISPLAY_VALUE: OrderableEdmTypeField<
      PositionDefaultDimensionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DISTRIBUTION_TEMPLATE_ID: OrderableEdmTypeField<
      PositionDefaultDimensionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LEGAL_ENTITY_DATA_AREA: OrderableEdmTypeField<
      PositionDefaultDimensionsDualWrite<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link jobPositionDualWrite} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    JOB_POSITION_DUAL_WRITE: OneToOneLink<
      PositionDefaultDimensionsDualWrite<DeSerializersT>,
      DeSerializersT,
      JobPositionsDualWriteApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-one navigation property {@link dimensionSet} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DIMENSION_SET: OneToOneLink<
      PositionDefaultDimensionsDualWrite<DeSerializersT>,
      DeSerializersT,
      DimensionSetsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<PositionDefaultDimensionsDualWrite<DeSerializers>>;
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
         * Static representation of the {@link positionId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSITION_ID: fieldBuilder.buildEdmTypeField(
          'PositionId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link dimensionDisplayValue} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIMENSION_DISPLAY_VALUE: fieldBuilder.buildEdmTypeField(
          'DimensionDisplayValue',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link distributionTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DISTRIBUTION_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'DistributionTemplateId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link legalEntityDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LEGAL_ENTITY_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'LegalEntityDataArea',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PositionDefaultDimensionsDualWrite)
      };
    }

    return this._schema;
  }
}
