/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DeliveryModeChannelLines } from './DeliveryModeChannelLines';
import { DeliveryModeChannelLinesRequestBuilder } from './DeliveryModeChannelLinesRequestBuilder';
import { DeliveryModesV2Api } from './DeliveryModesV2Api';
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
export class DeliveryModeChannelLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<DeliveryModeChannelLines<DeSerializersT>, DeSerializersT>
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
  ): DeliveryModeChannelLinesApi<DeSerializersT> {
    return new DeliveryModeChannelLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {
    /**
     * Static representation of the one-to-one navigation property {@link deliveryModeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE_V_2: OneToOneLink<
      DeliveryModeChannelLines<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
  };

  _addNavigationProperties(
    linkedApis: [DeliveryModesV2Api<DeSerializersT>]
  ): this {
    this.navigationPropertyFields = {
      DELIVERY_MODE_V_2: new OneToOneLink('DeliveryModeV2', this, linkedApis[0])
    };
    return this;
  }

  entityConstructor = DeliveryModeChannelLines;

  requestBuilder(): DeliveryModeChannelLinesRequestBuilder<DeSerializersT> {
    return new DeliveryModeChannelLinesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    DeliveryModeChannelLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DeliveryModeChannelLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DeliveryModeChannelLines<DeSerializersT>,
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
    typeof DeliveryModeChannelLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DeliveryModeChannelLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DeliveryModeChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MODE_OF_DELIVERY_CODE: OrderableEdmTypeField<
      DeliveryModeChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    PARTY_NUMBER: OrderableEdmTypeField<
      DeliveryModeChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_HIERARCHY_TYPE: OrderableEdmTypeField<
      DeliveryModeChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ORGANIZATION_NAME: OrderableEdmTypeField<
      DeliveryModeChannelLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    /**
     * Static representation of the one-to-one navigation property {@link deliveryModeV2} for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DELIVERY_MODE_V_2: OneToOneLink<
      DeliveryModeChannelLines<DeSerializersT>,
      DeSerializersT,
      DeliveryModesV2Api<DeSerializersT>
    >;
    ALL_FIELDS: AllFields<DeliveryModeChannelLines<DeSerializers>>;
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
         * Static representation of the {@link modeOfDeliveryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODE_OF_DELIVERY_CODE: fieldBuilder.buildEdmTypeField(
          'ModeOfDeliveryCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link partyNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PARTY_NUMBER: fieldBuilder.buildEdmTypeField(
          'PartyNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationHierarchyType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_HIERARCHY_TYPE: fieldBuilder.buildEdmTypeField(
          'OrganizationHierarchyType',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link organizationName} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ORGANIZATION_NAME: fieldBuilder.buildEdmTypeField(
          'OrganizationName',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DeliveryModeChannelLines)
      };
    }

    return this._schema;
  }
}
