/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { DiscountClaimDistributionDiscountLines } from './DiscountClaimDistributionDiscountLines';
import { DiscountClaimDistributionDiscountLinesRequestBuilder } from './DiscountClaimDistributionDiscountLinesRequestBuilder';
import { GupDiscountClaimCalcType } from './GupDiscountClaimCalcType';
import { GupDiscountClaimPostingProfileType } from './GupDiscountClaimPostingProfileType';
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
export class DiscountClaimDistributionDiscountLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      DiscountClaimDistributionDiscountLines<DeSerializersT>,
      DeSerializersT
    >
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
  ): DiscountClaimDistributionDiscountLinesApi<DeSerializersT> {
    return new DiscountClaimDistributionDiscountLinesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = DiscountClaimDistributionDiscountLines;

  requestBuilder(): DiscountClaimDistributionDiscountLinesRequestBuilder<DeSerializersT> {
    return new DiscountClaimDistributionDiscountLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    DiscountClaimDistributionDiscountLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      DiscountClaimDistributionDiscountLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    DiscountClaimDistributionDiscountLines<DeSerializersT>,
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
    typeof DiscountClaimDistributionDiscountLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        DiscountClaimDistributionDiscountLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      DiscountClaimDistributionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OFFER_ID: OrderableEdmTypeField<
      DiscountClaimDistributionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUM: OrderableEdmTypeField<
      DiscountClaimDistributionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    POSTING_PROFILE: OrderableEdmTypeField<
      DiscountClaimDistributionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    VALUE: OrderableEdmTypeField<
      DiscountClaimDistributionDiscountLines<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    CALC_TYPE: EnumField<
      DiscountClaimDistributionDiscountLines<DeSerializers>,
      DeSerializersT,
      GupDiscountClaimCalcType,
      true,
      true
    >;
    POSTING_PROFILE_TYPE: EnumField<
      DiscountClaimDistributionDiscountLines<DeSerializers>,
      DeSerializersT,
      GupDiscountClaimPostingProfileType,
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      DiscountClaimDistributionDiscountLines<DeSerializers>
    >;
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
         * Static representation of the {@link offerId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OFFER_ID: fieldBuilder.buildEdmTypeField(
          'OfferId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link lineNum} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LINE_NUM: fieldBuilder.buildEdmTypeField(
          'LineNum',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link postingProfile} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE: fieldBuilder.buildEdmTypeField(
          'PostingProfile',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link value} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALUE: fieldBuilder.buildEdmTypeField('Value', 'Edm.Decimal', false),
        /**
         * Static representation of the {@link calcType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CALC_TYPE: fieldBuilder.buildEnumField(
          'CalcType',
          GupDiscountClaimCalcType,
          true
        ),
        /**
         * Static representation of the {@link postingProfileType} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        POSTING_PROFILE_TYPE: fieldBuilder.buildEnumField(
          'PostingProfileType',
          GupDiscountClaimPostingProfileType,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', DiscountClaimDistributionDiscountLines)
      };
    }

    return this._schema;
  }
}
