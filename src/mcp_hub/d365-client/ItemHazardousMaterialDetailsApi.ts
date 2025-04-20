/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ItemHazardousMaterialDetails } from './ItemHazardousMaterialDetails';
import { ItemHazardousMaterialDetailsRequestBuilder } from './ItemHazardousMaterialDetailsRequestBuilder';
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
export class ItemHazardousMaterialDetailsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ItemHazardousMaterialDetails<DeSerializersT>, DeSerializersT>
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
  ): ItemHazardousMaterialDetailsApi<DeSerializersT> {
    return new ItemHazardousMaterialDetailsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ItemHazardousMaterialDetails;

  requestBuilder(): ItemHazardousMaterialDetailsRequestBuilder<DeSerializersT> {
    return new ItemHazardousMaterialDetailsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ItemHazardousMaterialDetails<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ItemHazardousMaterialDetails<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ItemHazardousMaterialDetails<DeSerializersT>,
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
    typeof ItemHazardousMaterialDetails,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ItemHazardousMaterialDetails,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ITEM_ID: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REG_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QTY: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CLASS_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_GROUP_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_NAME_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_INST_CODE_CARGO_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TUNNEL_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IATA_STAR: EnumField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACK_INST_CODE_PASSENGER_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MATERIAL_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_INST_CODE_PASSENGER: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASS_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TUNNEL_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARINE_POLLUTANT: EnumField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TECHNICAL_NAME_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    AIR_TYPE: EnumField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      HmimAirType,
      true,
      true
    >;
    IS_MATERIAL_RADIOACTIVE: EnumField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    PACK_INST_CODE_CARGO: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DIVISION_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_CATEGORY_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOS: EnumField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    LIMITED_QTY: EnumField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MULTIPLIER: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    PACKING_GROUP_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOWAGE_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLASHPOINT: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMS_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    STOWAGE_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ENVIRO_DANGEROUS: EnumField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    IDENTIFICATION_CODE_DESCRIPTION: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_CATEGORY_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMS_CODE: OrderableEdmTypeField<
      ItemHazardousMaterialDetails<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ItemHazardousMaterialDetails<DeSerializers>>;
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
         * Static representation of the {@link qty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QTY: fieldBuilder.buildEdmTypeField('Qty', 'Edm.Decimal', false),
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
         * Static representation of the {@link packingGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PackingGroupCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link labelCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LABEL_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'LabelCodeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link technicalNameCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_NAME_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TechnicalNameCodeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PackCodeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link packInstCodeCargoDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_INST_CODE_CARGO_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PackInstCodeCargoDescription',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link iataStar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IATA_STAR: fieldBuilder.buildEnumField('IATAStar', NoYes, true),
        /**
         * Static representation of the {@link packInstCodePassengerDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_INST_CODE_PASSENGER_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PackInstCodePassengerDescription',
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
         * Static representation of the {@link materialDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'MaterialDescription',
          'Edm.String',
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
         * Static representation of the {@link divisionCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DIVISION_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'DivisionCodeDescription',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link identificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'IdentificationCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link classCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'ClassCodeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tunnelCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TUNNEL_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TunnelCodeDescription',
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
         * Static representation of the {@link technicalNameCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_NAME_CODE: fieldBuilder.buildEdmTypeField(
          'TechnicalNameCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link airType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AIR_TYPE: fieldBuilder.buildEnumField('AirType', HmimAirType, true),
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
         * Static representation of the {@link packInstCodeCargo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_INST_CODE_CARGO: fieldBuilder.buildEdmTypeField(
          'PackInstCodeCargo',
          'Edm.String',
          true
        ),
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
         * Static representation of the {@link transportCategoryCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRANSPORT_CATEGORY_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'TransportCategoryCodeDescription',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link nos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOS: fieldBuilder.buildEnumField('NOS', NoYes, true),
        /**
         * Static representation of the {@link limitedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMITED_QTY: fieldBuilder.buildEnumField('LimitedQty', NoYes, true),
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
         * Static representation of the {@link packingGroupCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_GROUP_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'PackingGroupCodeDescription',
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
         * Static representation of the {@link flashpoint} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FLASHPOINT: fieldBuilder.buildEdmTypeField(
          'Flashpoint',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link emsCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMS_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'EMSCodeDescription',
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
         * Static representation of the {@link stowageCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STOWAGE_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'StowageCodeDescription',
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
         * Static representation of the {@link identificationCodeDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_CODE_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'IdentificationCodeDescription',
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
         * Static representation of the {@link emsCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EMS_CODE: fieldBuilder.buildEdmTypeField('EMSCode', 'Edm.String', true),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ItemHazardousMaterialDetails)
      };
    }

    return this._schema;
  }
}
