/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Materials } from './Materials';
import { MaterialsRequestBuilder } from './MaterialsRequestBuilder';
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
export class MaterialsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<Materials<DeSerializersT>, DeSerializersT>
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
  ): MaterialsApi<DeSerializersT> {
    return new MaterialsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = Materials;

  requestBuilder(): MaterialsRequestBuilder<DeSerializersT> {
    return new MaterialsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    Materials<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<Materials<DeSerializersT>, DeSerializersT>(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<Materials<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<typeof Materials, DeSerializersT>;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(Materials, this.deSerializers);
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MATERIAL_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL_DESCRIPTION: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASS_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LABEL_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    LIMITED_QTY: EnumField<
      Materials<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    STOWAGE_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    EMS_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_INST_CODE_PASSENGER: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_INST_CODE_CARGO: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MULTIPLIER: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ENVIRO_DANGEROUS: EnumField<
      Materials<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    UNIT_OF_MEASURE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TECHNICAL_NAME_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRANSPORT_CATEGORY_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    IDENTIFICATION_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    FLASHPOINT: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    MARINE_POLLUTANT: EnumField<
      Materials<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    AIR_TYPE: EnumField<
      Materials<DeSerializers>,
      DeSerializersT,
      HmimAirType,
      true,
      true
    >;
    REG_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    NOS: EnumField<Materials<DeSerializers>, DeSerializersT, NoYes, true, true>;
    IATA_STAR: EnumField<
      Materials<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    DIVISION_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACKING_GROUP_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TUNNEL_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PACK_CODE: OrderableEdmTypeField<
      Materials<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<Materials<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link materialCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_CODE: fieldBuilder.buildEdmTypeField(
          'MaterialCode',
          'Edm.String',
          false
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
         * Static representation of the {@link classCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASS_CODE: fieldBuilder.buildEdmTypeField(
          'ClassCode',
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
         * Static representation of the {@link limitedQty} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LIMITED_QTY: fieldBuilder.buildEnumField('LimitedQty', NoYes, true),
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
         * Static representation of the {@link packInstCodeCargo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_INST_CODE_CARGO: fieldBuilder.buildEdmTypeField(
          'PackInstCodeCargo',
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
         * Static representation of the {@link enviroDangerous} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ENVIRO_DANGEROUS: fieldBuilder.buildEnumField(
          'EnviroDangerous',
          NoYes,
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
         * Static representation of the {@link technicalNameCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TECHNICAL_NAME_CODE: fieldBuilder.buildEdmTypeField(
          'TechnicalNameCode',
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
         * Static representation of the {@link identificationCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IDENTIFICATION_CODE: fieldBuilder.buildEdmTypeField(
          'IdentificationCode',
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
         * Static representation of the {@link marinePollutant} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MARINE_POLLUTANT: fieldBuilder.buildEnumField(
          'MarinePollutant',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link airType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AIR_TYPE: fieldBuilder.buildEnumField('AirType', HmimAirType, true),
        /**
         * Static representation of the {@link regCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REG_CODE: fieldBuilder.buildEdmTypeField('RegCode', 'Edm.String', true),
        /**
         * Static representation of the {@link nos} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        NOS: fieldBuilder.buildEnumField('NOS', NoYes, true),
        /**
         * Static representation of the {@link iataStar} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IATA_STAR: fieldBuilder.buildEnumField('IATAStar', NoYes, true),
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
         * Static representation of the {@link packingGroupCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACKING_GROUP_CODE: fieldBuilder.buildEdmTypeField(
          'PackingGroupCode',
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
         * Static representation of the {@link packCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PACK_CODE: fieldBuilder.buildEdmTypeField(
          'PackCode',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', Materials)
      };
    }

    return this._schema;
  }
}
