/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JourneyTemplateLines } from './JourneyTemplateLines';
import { JourneyTemplateLinesRequestBuilder } from './JourneyTemplateLinesRequestBuilder';
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
export class JourneyTemplateLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<JourneyTemplateLines<DeSerializersT>, DeSerializersT>
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
  ): JourneyTemplateLinesApi<DeSerializersT> {
    return new JourneyTemplateLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = JourneyTemplateLines;

  requestBuilder(): JourneyTemplateLinesRequestBuilder<DeSerializersT> {
    return new JourneyTemplateLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    JourneyTemplateLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<JourneyTemplateLines<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    JourneyTemplateLines<DeSerializersT>,
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
    typeof JourneyTemplateLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        JourneyTemplateLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNEY_TEMPLATE_ID: OrderableEdmTypeField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    JOURNEY_LEG_ID: OrderableEdmTypeField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_SHIPPING_PORT_ID: OrderableEdmTypeField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    SHIPPING_VENDOR_ACCOUNT_NUMBER: OrderableEdmTypeField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_FROM_PORT_JOURNEY_ORIGIN_PORT: EnumField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TO_SHIPPING_PORT_ID: OrderableEdmTypeField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DELIVERY_MODE_CODE: OrderableEdmTypeField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IS_TO_PORT_JOURNEY_DESTINATION_PORT: EnumField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      JourneyTemplateLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<JourneyTemplateLines<DeSerializers>>;
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
         * Static representation of the {@link journeyTemplateId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNEY_TEMPLATE_ID: fieldBuilder.buildEdmTypeField(
          'JourneyTemplateId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link journeyLegId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        JOURNEY_LEG_ID: fieldBuilder.buildEdmTypeField(
          'JourneyLegId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fromShippingPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_SHIPPING_PORT_ID: fieldBuilder.buildEdmTypeField(
          'FromShippingPortId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link shippingVendorAccountNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SHIPPING_VENDOR_ACCOUNT_NUMBER: fieldBuilder.buildEdmTypeField(
          'ShippingVendorAccountNumber',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isFromPortJourneyOriginPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FROM_PORT_JOURNEY_ORIGIN_PORT: fieldBuilder.buildEnumField(
          'IsFromPortJourneyOriginPort',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link toShippingPortId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_SHIPPING_PORT_ID: fieldBuilder.buildEdmTypeField(
          'ToShippingPortID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link deliveryModeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DELIVERY_MODE_CODE: fieldBuilder.buildEdmTypeField(
          'DeliveryModeCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link isToPortJourneyDestinationPort} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_TO_PORT_JOURNEY_DESTINATION_PORT: fieldBuilder.buildEnumField(
          'IsToPortJourneyDestinationPort',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link lineNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUMBER: fieldBuilder.buildEdmTypeField(
          'LineNumber',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', JourneyTemplateLines)
      };
    }

    return this._schema;
  }
}
