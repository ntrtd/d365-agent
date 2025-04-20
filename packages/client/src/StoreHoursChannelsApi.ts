/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { StoreHoursChannels } from './StoreHoursChannels';
import { StoreHoursChannelsRequestBuilder } from './StoreHoursChannelsRequestBuilder';
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
export class StoreHoursChannelsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<StoreHoursChannels<DeSerializersT>, DeSerializersT>
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
  ): StoreHoursChannelsApi<DeSerializersT> {
    return new StoreHoursChannelsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = StoreHoursChannels;

  requestBuilder(): StoreHoursChannelsRequestBuilder<DeSerializersT> {
    return new StoreHoursChannelsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    StoreHoursChannels<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<StoreHoursChannels<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    StoreHoursChannels<DeSerializersT>,
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
    typeof StoreHoursChannels,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        StoreHoursChannels,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      StoreHoursChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STORE_HOURS_TEMPLATE_ID: OrderableEdmTypeField<
      StoreHoursChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_OPERATING_UNIT_PARTY_NUMBER: OrderableEdmTypeField<
      StoreHoursChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OM_INTERNAL_ORGANIZATION_PARTY_NUMBER: OrderableEdmTypeField<
      StoreHoursChannels<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<StoreHoursChannels<DeSerializers>>;
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
         * Static representation of the {@link storeHoursTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STORE_HOURS_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'StoreHoursTemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omOperatingUnitPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_OPERATING_UNIT_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMOperatingUnitPartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link omInternalOrganizationPartyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OM_INTERNAL_ORGANIZATION_PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'OMInternalOrganizationPartyNumber',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', StoreHoursChannels)
      };
    }

    return this._schema;
  }
}
