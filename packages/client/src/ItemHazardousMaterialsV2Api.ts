/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemHazardousMaterialsV2 } from './ItemHazardousMaterialsV2';
import { ItemHazardousMaterialsV2RequestBuilder } from './ItemHazardousMaterialsV2RequestBuilder';
import { NoYes } from './NoYes';
import { HmimAirType } from './HmimAirType';
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
export class ItemHazardousMaterialsV2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ItemHazardousMaterialsV2<DeSerializersT>, DeSerializersT>
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
  ): ItemHazardousMaterialsV2Api<DeSerializersT> {
    return new ItemHazardousMaterialsV2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItemHazardousMaterialsV2;

  requestBuilder(): ItemHazardousMaterialsV2RequestBuilder<DeSerializersT> {
    return new ItemHazardousMaterialsV2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemHazardousMaterialsV2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItemHazardousMaterialsV2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemHazardousMaterialsV2<DeSerializersT>,
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
    typeof ItemHazardousMaterialsV2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemHazardousMaterialsV2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REG_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RECORD_ID: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Int64',
      false,
      true
    >;
    EMS_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_INST_CODE_PASSENGER: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOS: EnumField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MATERIAL_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    QTY: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    TECHNICAL_NAME_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_CATEGORY_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARINE_POLLUTANT: EnumField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LABEL_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASS_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENVIRO_DANGEROUS: EnumField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    CLASS_GROUP_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_GROUP_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AIR_TYPE: EnumField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      HmimAirType,
      true,
      true
    >;
    TUNNEL_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IATA_STAR: EnumField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IS_MATERIAL_RADIOACTIVE: EnumField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IDENTIFICATION_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOWAGE_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTIPLIER: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    LIMITED_QTY: EnumField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIVISION_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_INST_CODE_CARGO: OrderableEdmTypeField<
      ItemHazardousMaterialsV2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ItemHazardousMaterialsV2<DeSerializers>>;
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
         * Static representation of the {@link itemId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ITEM_ID: fieldBuilder.buildEdmTypeField('ItemId', 'Edm.String', false),
        /**
         * Static representation of the {@link regCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REG_CODE: fieldBuilder.buildEdmTypeField(
          'RegCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link recordId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECORD_ID: fieldBuilder.buildEdmTypeField(
          'RecordId',
          'Edm.Int64',
          false
        ),
        /**
         * Static representation of the {@link emsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMS_CODE: fieldBuilder.buildEdmTypeField('EMSCode', 'Edm.String', true),
        /**
         * Static representation of the {@link packInstCodePassenger} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_INST_CODE_PASSENGER: fieldBuilder.buildEdmTypeField(
          'PackInstCodePassenger',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOS: fieldBuilder.buildEnumField('NOS', NoYes, true),
        /**
         * Static representation of the {@link materialCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_CODE: fieldBuilder.buildEdmTypeField(
          'MaterialCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link technicalNameCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_NAME_CODE: fieldBuilder.buildEdmTypeField(
          'TechnicalNameCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link unitOfMeasure} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNIT_OF_MEASURE: fieldBuilder.buildEdmTypeField(
          'UnitOfMeasure',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link transportCategoryCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_CATEGORY_CODE: fieldBuilder.buildEdmTypeField(
          'TransportCategoryCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link marinePollutant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARINE_POLLUTANT: fieldBuilder.buildEnumField(
          'MarinePollutant',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link labelCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_CODE: fieldBuilder.buildEdmTypeField(
          'LabelCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link classCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_CODE: fieldBuilder.buildEdmTypeField(
          'ClassCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link enviroDangerous} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRO_DANGEROUS: fieldBuilder.buildEnumField(
          'EnviroDangerous',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link classGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'ClassGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packingGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PackingGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link airType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AIR_TYPE: fieldBuilder.buildEnumField('AirType', HmimAirType, true),
        /**
         * Static representation of the {@link tunnelCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUNNEL_CODE: fieldBuilder.buildEdmTypeField(
          'TunnelCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link materialDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'MaterialDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_CODE: fieldBuilder.buildEdmTypeField(
          'PackCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link iataStar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IATA_STAR: fieldBuilder.buildEnumField('IATAStar', NoYes, true),
        /**
         * Static representation of the {@link isMaterialRadioactive} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_MATERIAL_RADIOACTIVE: fieldBuilder.buildEnumField(
          'IsMaterialRadioactive',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link identificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'IdentificationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link stowageCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOWAGE_CODE: fieldBuilder.buildEdmTypeField(
          'StowageCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link multiplier} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MULTIPLIER: fieldBuilder.buildEdmTypeField(
          'Multiplier',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link limitedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMITED_QTY: fieldBuilder.buildEnumField('LimitedQty', NoYes, true),
        /**
         * Static representation of the {@link divisionCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION_CODE: fieldBuilder.buildEdmTypeField(
          'DivisionCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packInstCodeCargo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_INST_CODE_CARGO: fieldBuilder.buildEdmTypeField(
          'PackInstCodeCargo',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemHazardousMaterialsV2)
      };
    }

    return this._schema;
  }
}
