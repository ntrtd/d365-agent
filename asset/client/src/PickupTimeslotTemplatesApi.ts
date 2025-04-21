/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PickupTimeslotTemplates } from './PickupTimeslotTemplates';
import { PickupTimeslotTemplatesRequestBuilder } from './PickupTimeslotTemplatesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class PickupTimeslotTemplatesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<PickupTimeslotTemplates<DeSerializersT>, DeSerializersT>
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
  ): PickupTimeslotTemplatesApi<DeSerializersT> {
    return new PickupTimeslotTemplatesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = PickupTimeslotTemplates;

  requestBuilder(): PickupTimeslotTemplatesRequestBuilder<DeSerializersT> {
    return new PickupTimeslotTemplatesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    PickupTimeslotTemplates<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      PickupTimeslotTemplates<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    PickupTimeslotTemplates<DeSerializersT>,
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
    typeof PickupTimeslotTemplates,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        PickupTimeslotTemplates,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      PickupTimeslotTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TIMESLOT_ID: OrderableEdmTypeField<
      PickupTimeslotTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MAXIMUM_LIMIT: OrderableEdmTypeField<
      PickupTimeslotTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      PickupTimeslotTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MINIMUM_LIMIT: OrderableEdmTypeField<
      PickupTimeslotTemplates<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    ALL_FIELDS: AllFields<PickupTimeslotTemplates<DeSerializers>>;
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
         * Static representation of the {@link timeslotId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TIMESLOT_ID: fieldBuilder.buildEdmTypeField(
          'TimeslotId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link maximumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MAXIMUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'MaximumLimit',
          'Edm.Int32',
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
         * Static representation of the {@link minimumLimit} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MINIMUM_LIMIT: fieldBuilder.buildEdmTypeField(
          'MinimumLimit',
          'Edm.Int32',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', PickupTimeslotTemplates)
      };
    }

    return this._schema;
  }
}
