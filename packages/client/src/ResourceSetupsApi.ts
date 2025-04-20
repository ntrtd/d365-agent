/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ResourceSetups } from './ResourceSetups';
import { ResourceSetupsRequestBuilder } from './ResourceSetupsRequestBuilder';
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
export class ResourceSetupsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ResourceSetups<DeSerializersT>, DeSerializersT>
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
  ): ResourceSetupsApi<DeSerializersT> {
    return new ResourceSetupsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ResourceSetups;

  requestBuilder(): ResourceSetupsRequestBuilder<DeSerializersT> {
    return new ResourceSetupsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ResourceSetups<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ResourceSetups<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ResourceSetups<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof ResourceSetups, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(ResourceSetups, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    RESOURCE_LEGAL_ENTITY_DATA_AREA: OrderableEdmTypeField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RESOURCE_ID: OrderableEdmTypeField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PERIOD_ID: OrderableEdmTypeField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    USE_RESOURCE_RATE: OrderableEdmTypeField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      'Edm.Boolean',
      false,
      true
    >;
    VALIDATE_RESOURCE_CATEGORY: EnumField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    REQUIRE_START_STOP_TIME: EnumField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MAX_HOURS_CALENDAR_ID: OrderableEdmTypeField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DEFAULT_TIME_CATEGORY_ID: OrderableEdmTypeField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALIDATE_PROJECT_RESOURCE: EnumField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    RESOURCE_NAME: OrderableEdmTypeField<
      ResourceSetups<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ResourceSetups<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link resourceLegalEntityDataArea} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_LEGAL_ENTITY_DATA_AREA: fieldBuilder.buildEdmTypeField(
          'ResourceLegalEntityDataArea',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link resourceId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_ID: fieldBuilder.buildEdmTypeField(
          'ResourceId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link periodId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PERIOD_ID: fieldBuilder.buildEdmTypeField(
          'PeriodId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link useResourceRate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        USE_RESOURCE_RATE: fieldBuilder.buildEdmTypeField(
          'UseResourceRate',
          'Edm.Boolean',
          false
        ),
        /**
         * Static representation of the {@link validateResourceCategory} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_RESOURCE_CATEGORY: fieldBuilder.buildEnumField(
          'ValidateResourceCategory',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link requireStartStopTime} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REQUIRE_START_STOP_TIME: fieldBuilder.buildEnumField(
          'RequireStartStopTime',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link maxHoursCalendarId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAX_HOURS_CALENDAR_ID: fieldBuilder.buildEdmTypeField(
          'MaxHoursCalendarId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link defaultTimeCategoryId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DEFAULT_TIME_CATEGORY_ID: fieldBuilder.buildEdmTypeField(
          'DefaultTimeCategoryId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link validateProjectResource} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALIDATE_PROJECT_RESOURCE: fieldBuilder.buildEnumField(
          'ValidateProjectResource',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link resourceName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RESOURCE_NAME: fieldBuilder.buildEdmTypeField(
          'ResourceName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ResourceSetups)
      };
    }

    return this._schema;
  }
}
