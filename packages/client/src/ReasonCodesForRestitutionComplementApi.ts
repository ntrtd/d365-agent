/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ReasonCodesForRestitutionComplement } from './ReasonCodesForRestitutionComplement';
import { ReasonCodesForRestitutionComplementRequestBuilder } from './ReasonCodesForRestitutionComplementRequestBuilder';
import { FbReasonCodeForRestitutionComplementClassificationBr } from './FbReasonCodeForRestitutionComplementClassificationBr';
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
export class ReasonCodesForRestitutionComplementApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ReasonCodesForRestitutionComplement<DeSerializersT>,
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
  ): ReasonCodesForRestitutionComplementApi<DeSerializersT> {
    return new ReasonCodesForRestitutionComplementApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ReasonCodesForRestitutionComplement;

  requestBuilder(): ReasonCodesForRestitutionComplementRequestBuilder<DeSerializersT> {
    return new ReasonCodesForRestitutionComplementRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ReasonCodesForRestitutionComplement<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ReasonCodesForRestitutionComplement<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ReasonCodesForRestitutionComplement<DeSerializersT>,
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
    typeof ReasonCodesForRestitutionComplement,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ReasonCodesForRestitutionComplement,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ReasonCodesForRestitutionComplement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REASON_CODE: OrderableEdmTypeField<
      ReasonCodesForRestitutionComplement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    STATE: OrderableEdmTypeField<
      ReasonCodesForRestitutionComplement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    OCCURRENCE_CODE: OrderableEdmTypeField<
      ReasonCodesForRestitutionComplement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    CLASSIFICATION: EnumField<
      ReasonCodesForRestitutionComplement<DeSerializers>,
      DeSerializersT,
      FbReasonCodeForRestitutionComplementClassificationBr,
      true,
      true
    >;
    VALID_TO: OrderableEdmTypeField<
      ReasonCodesForRestitutionComplement<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ReasonCodesForRestitutionComplement<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    VALID_FROM: OrderableEdmTypeField<
      ReasonCodesForRestitutionComplement<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ReasonCodesForRestitutionComplement<DeSerializers>>;
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
         * Static representation of the {@link reasonCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REASON_CODE: fieldBuilder.buildEdmTypeField(
          'ReasonCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link state} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        STATE: fieldBuilder.buildEdmTypeField('State', 'Edm.String', true),
        /**
         * Static representation of the {@link occurrenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OCCURRENCE_CODE: fieldBuilder.buildEdmTypeField(
          'OccurrenceCode',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link classification} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        CLASSIFICATION: fieldBuilder.buildEnumField(
          'Classification',
          FbReasonCodeForRestitutionComplementClassificationBr,
          true
        ),
        /**
         * Static representation of the {@link validTo} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_TO: fieldBuilder.buildEdmTypeField(
          'ValidTo',
          'Edm.DateTimeOffset',
          false
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
         * Static representation of the {@link validFrom} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        VALID_FROM: fieldBuilder.buildEdmTypeField(
          'ValidFrom',
          'Edm.DateTimeOffset',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ReasonCodesForRestitutionComplement)
      };
    }

    return this._schema;
  }
}
