/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BenefitsEssTileSetupBenefitCredits } from './BenefitsEssTileSetupBenefitCredits';
import { BenefitsEssTileSetupBenefitCreditsRequestBuilder } from './BenefitsEssTileSetupBenefitCreditsRequestBuilder';
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
export class BenefitsEssTileSetupBenefitCreditsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      BenefitsEssTileSetupBenefitCredits<DeSerializersT>,
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
  ): BenefitsEssTileSetupBenefitCreditsApi<DeSerializersT> {
    return new BenefitsEssTileSetupBenefitCreditsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = BenefitsEssTileSetupBenefitCredits;

  requestBuilder(): BenefitsEssTileSetupBenefitCreditsRequestBuilder<DeSerializersT> {
    return new BenefitsEssTileSetupBenefitCreditsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    BenefitsEssTileSetupBenefitCredits<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      BenefitsEssTileSetupBenefitCredits<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    BenefitsEssTileSetupBenefitCredits<DeSerializersT>,
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
    typeof BenefitsEssTileSetupBenefitCredits,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        BenefitsEssTileSetupBenefitCredits,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      BenefitsEssTileSetupBenefitCredits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TILE_ID: OrderableEdmTypeField<
      BenefitsEssTileSetupBenefitCredits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    BENEFIT_CREDIT_ID: OrderableEdmTypeField<
      BenefitsEssTileSetupBenefitCredits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TILE_LABEL_TEXT: OrderableEdmTypeField<
      BenefitsEssTileSetupBenefitCredits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      BenefitsEssTileSetupBenefitCredits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    TRACK_OPEN_ENROLLMENT_PROGRESS: EnumField<
      BenefitsEssTileSetupBenefitCredits<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    TILE_BACKGROUND_IMAGE: OrderableEdmTypeField<
      BenefitsEssTileSetupBenefitCredits<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<BenefitsEssTileSetupBenefitCredits<DeSerializers>>;
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
         * Static representation of the {@link tileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TILE_ID: fieldBuilder.buildEdmTypeField('TileId', 'Edm.String', false),
        /**
         * Static representation of the {@link benefitCreditId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BENEFIT_CREDIT_ID: fieldBuilder.buildEdmTypeField(
          'BenefitCreditId',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link tileLabelText} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TILE_LABEL_TEXT: fieldBuilder.buildEdmTypeField(
          'TileLabelText',
          'Edm.String',
          true
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
         * Static representation of the {@link trackOpenEnrollmentProgress} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TRACK_OPEN_ENROLLMENT_PROGRESS: fieldBuilder.buildEnumField(
          'TrackOpenEnrollmentProgress',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link tileBackgroundImage} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TILE_BACKGROUND_IMAGE: fieldBuilder.buildEdmTypeField(
          'TileBackgroundImage',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', BenefitsEssTileSetupBenefitCredits)
      };
    }

    return this._schema;
  }
}
