/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RetailBarcodeMaskSegments } from './RetailBarcodeMaskSegments';
import { RetailBarcodeMaskSegmentsRequestBuilder } from './RetailBarcodeMaskSegmentsRequestBuilder';
import { RetailBarcodeMaskCharacterTypeBase } from './RetailBarcodeMaskCharacterTypeBase';
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
export class RetailBarcodeMaskSegmentsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<RetailBarcodeMaskSegments<DeSerializersT>, DeSerializersT>
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
  ): RetailBarcodeMaskSegmentsApi<DeSerializersT> {
    return new RetailBarcodeMaskSegmentsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RetailBarcodeMaskSegments;

  requestBuilder(): RetailBarcodeMaskSegmentsRequestBuilder<DeSerializersT> {
    return new RetailBarcodeMaskSegmentsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RetailBarcodeMaskSegments<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RetailBarcodeMaskSegments<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RetailBarcodeMaskSegments<DeSerializersT>,
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
    typeof RetailBarcodeMaskSegments,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RetailBarcodeMaskSegments,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RetailBarcodeMaskSegments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MASK_ID: OrderableEdmTypeField<
      RetailBarcodeMaskSegments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEGMENT_NUMBER: OrderableEdmTypeField<
      RetailBarcodeMaskSegments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHARACTER: OrderableEdmTypeField<
      RetailBarcodeMaskSegments<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DECIMALS: OrderableEdmTypeField<
      RetailBarcodeMaskSegments<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    CHARACTER_TYPE: EnumField<
      RetailBarcodeMaskSegments<DeSerializers>,
      DeSerializersT,
      RetailBarcodeMaskCharacterTypeBase,
      true,
      true
    >;
    LENGTH: OrderableEdmTypeField<
      RetailBarcodeMaskSegments<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RetailBarcodeMaskSegments<DeSerializers>>;
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
         * Static representation of the {@link maskId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MASK_ID: fieldBuilder.buildEdmTypeField('MaskId', 'Edm.String', false),
        /**
         * Static representation of the {@link segmentNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEGMENT_NUMBER: fieldBuilder.buildEdmTypeField(
          'SegmentNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link character} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARACTER: fieldBuilder.buildEdmTypeField(
          'Character',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link decimals} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        DECIMALS: fieldBuilder.buildEdmTypeField(
          'Decimals',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link characterType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CHARACTER_TYPE: fieldBuilder.buildEnumField(
          'CharacterType',
          RetailBarcodeMaskCharacterTypeBase,
          true
        ),
        /**
         * Static representation of the {@link length} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LENGTH: fieldBuilder.buildEdmTypeField('Length', 'Edm.Decimal', false),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RetailBarcodeMaskSegments)
      };
    }

    return this._schema;
  }
}
