/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { WarehouseReplenishmentTemplates } from './WarehouseReplenishmentTemplates';
import { WarehouseReplenishmentTemplatesRequestBuilder } from './WarehouseReplenishmentTemplatesRequestBuilder';
import { WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi } from './WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi';
import { NoYes } from './NoYes';
import { WhsReplenishmentType } from './WhsReplenishmentType';
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
export class WarehouseReplenishmentTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<WarehouseReplenishmentTemplates<DeSerializersT>, DeSerializersT>
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
  ): WarehouseReplenishmentTemplatesApi<DeSerializersT> {
    return new WarehouseReplenishmentTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link warehouseReplenishmentTemplateUnitOfMeasureRestrictions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_REPLENISHMENT_TEMPLATE_UNIT_OF_MEASURE_RESTRICTIONS: OneToManyLink<
      WarehouseReplenishmentTemplates<DeSerializersT>,
      DeSerializersT,
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      WAREHOUSE_REPLENISHMENT_TEMPLATE_UNIT_OF_MEASURE_RESTRICTIONS:
        new OneToManyLink(
          'WarehouseReplenishmentTemplateUnitOfMeasureRestrictions',
          this,
          linkedApis[0]
        )
    };
    return this;
  }

  entityConstructor = WarehouseReplenishmentTemplates;

  requestBuilder(): WarehouseReplenishmentTemplatesRequestBuilder<DeSerializersT> {
    return new WarehouseReplenishmentTemplatesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    WarehouseReplenishmentTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      WarehouseReplenishmentTemplates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    WarehouseReplenishmentTemplates<DeSerializersT>,
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
    typeof WarehouseReplenishmentTemplates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        WarehouseReplenishmentTemplates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      WarehouseReplenishmentTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TEMPLATE_ID: OrderableEdmTypeField<
      WarehouseReplenishmentTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    WAVE_STEP_CODE: OrderableEdmTypeField<
      WarehouseReplenishmentTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    WILL_DEMAND_CANCELLATION_CANCEL_REPLENISHMENT: EnumField<
      WarehouseReplenishmentTemplates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TEMPLATE_TYPE: EnumField<
      WarehouseReplenishmentTemplates<DeSerializers>,
      DeSerializersT,
      WhsReplenishmentType,
      true,
      true
    >;
    TEMPLATE_DESCRIPTION: OrderableEdmTypeField<
      WarehouseReplenishmentTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_EXISTING_IMMEDIATE_REPLENISHMENT_WORK_CROSS_UNIT: EnumField<
      WarehouseReplenishmentTemplates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    WILL_CREATED_REPLENISHMENT_WORK_ALLOW_USING_UNRESERVED_QUANTITIES: EnumField<
      WarehouseReplenishmentTemplates<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link warehouseReplenishmentTemplateUnitOfMeasureRestrictions} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    WAREHOUSE_REPLENISHMENT_TEMPLATE_UNIT_OF_MEASURE_RESTRICTIONS: OneToManyLink<
      WarehouseReplenishmentTemplates<DeSerializersT>,
      DeSerializersT,
      WarehouseReplenishmentTemplateUnitOfMeasureRestrictionsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<WarehouseReplenishmentTemplates<DeSerializers>>;
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
         * Static representation of the {@link templateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'TemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link waveStepCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WAVE_STEP_CODE: fieldBuilder.buildEdmTypeField(
          'WaveStepCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link willDemandCancellationCancelReplenishment} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_DEMAND_CANCELLATION_CANCEL_REPLENISHMENT:
          fieldBuilder.buildEnumField(
            'WillDemandCancellationCancelReplenishment',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link templateType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_TYPE: fieldBuilder.buildEnumField(
          'TemplateType',
          WhsReplenishmentType,
          true
        ),
        /**
         * Static representation of the {@link templateDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TEMPLATE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TemplateDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useExistingImmediateReplenishmentWorkCrossUnit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_EXISTING_IMMEDIATE_REPLENISHMENT_WORK_CROSS_UNIT:
          fieldBuilder.buildEnumField(
            'UseExistingImmediateReplenishmentWorkCrossUnit',
            NoYes,
            true
          ),
        /**
         * Static representation of the {@link willCreatedReplenishmentWorkAllowUsingUnreservedQuantities} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        WILL_CREATED_REPLENISHMENT_WORK_ALLOW_USING_UNRESERVED_QUANTITIES:
          fieldBuilder.buildEnumField(
            'WillCreatedReplenishmentWorkAllowUsingUnreservedQuantities',
            NoYes,
            true
          ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', WarehouseReplenishmentTemplates)
      };
    }

    return this._schema;
  }
}
