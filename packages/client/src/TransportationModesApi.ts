/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TransportationModes } from './TransportationModes';
import { TransportationModesRequestBuilder } from './TransportationModesRequestBuilder';
import { OutboundShipmentOrderHeadersApi } from './OutboundShipmentOrderHeadersApi';
import { FreightBillDetailsApi } from './FreightBillDetailsApi';
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
  OneToManyLink
} from '@sap-cloud-sdk/odata-v4';
export class TransportationModesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<TransportationModes<DeSerializersT>, DeSerializersT>
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
  ): TransportationModesApi<DeSerializersT> {
    return new TransportationModesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-many navigation property {@link outbonudShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBONUD_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      TransportationModes<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freightBillDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_BILL_DETAILS: OneToManyLink<
      TransportationModes<DeSerializersT>,
      DeSerializersT,
      FreightBillDetailsApi<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [
      OutboundShipmentOrderHeadersApi<DeSerializersT>,
      FreightBillDetailsApi<DeSerializersT>
    ]
  ): this {
    this.navigationPropertyFields = {
      OUTBONUD_SHIPMENT_ORDER_HEADERS: new OneToManyLink(
        'OutbonudShipmentOrderHeaders',
        this,
        linkedApis[0]
      ),
      FREIGHT_BILL_DETAILS: new OneToManyLink(
        'FreightBillDetails',
        this,
        linkedApis[1]
      )
    };
    return this;
  }

  entityConstructor = TransportationModes;

  requestBuilder(): TransportationModesRequestBuilder<DeSerializersT> {
    return new TransportationModesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    TransportationModes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<TransportationModes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    TransportationModes<DeSerializersT>,
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
    typeof TransportationModes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        TransportationModes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      TransportationModes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODE_CODE: OrderableEdmTypeField<
      TransportationModes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODE_DESCRIPTION: OrderableEdmTypeField<
      TransportationModes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-many navigation property {@link outbonudShipmentOrderHeaders} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    OUTBONUD_SHIPMENT_ORDER_HEADERS: OneToManyLink<
      TransportationModes<DeSerializersT>,
      DeSerializersT,
      OutboundShipmentOrderHeadersApi<DeSerializersT>
    >;
    /**
     * Static representation of the one-to-many navigation property {@link freightBillDetails} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    FREIGHT_BILL_DETAILS: OneToManyLink<
      TransportationModes<DeSerializersT>,
      DeSerializersT,
      FreightBillDetailsApi<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<TransportationModes<DeSerializers>>;
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
         * Static representation of the {@link modeCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODE_CODE: fieldBuilder.buildEdmTypeField(
          'ModeCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link modeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ModeDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', TransportationModes)
      };
    }

    return this._schema;
  }
}
