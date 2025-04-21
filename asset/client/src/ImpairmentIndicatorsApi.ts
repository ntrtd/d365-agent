/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ImpairmentIndicators } from './ImpairmentIndicators';
import { ImpairmentIndicatorsRequestBuilder } from './ImpairmentIndicatorsRequestBuilder';
import { AssetImpairmentLevelJp } from './AssetImpairmentLevelJp';
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
export class ImpairmentIndicatorsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ImpairmentIndicators<DeSerializersT>, DeSerializersT>
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
  ): ImpairmentIndicatorsApi<DeSerializersT> {
    return new ImpairmentIndicatorsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ImpairmentIndicators;

  requestBuilder(): ImpairmentIndicatorsRequestBuilder<DeSerializersT> {
    return new ImpairmentIndicatorsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ImpairmentIndicators<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ImpairmentIndicators<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ImpairmentIndicators<DeSerializersT>,
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
    typeof ImpairmentIndicators,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ImpairmentIndicators,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_FIXED_ASSET_NUMBER: OrderableEdmTypeField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    REFERENCE_BOOK: OrderableEdmTypeField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LINE_NUMBER: OrderableEdmTypeField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ASSESSMENT_LEVEL: EnumField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      AssetImpairmentLevelJp,
      true,
      true
    >;
    IS_FINALIZED: EnumField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    MODIFY_DATE: OrderableEdmTypeField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      'Edm.DateTimeOffset',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    UNDISCOUNTED_CASH_FLOW: OrderableEdmTypeField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    RECOVERABLE_AMOUNT: OrderableEdmTypeField<
      ImpairmentIndicators<DeSerializers>,
      DeSerializersT,
      'Edm.Decimal',
      false,
      true
    >;
    ALL_FIELDS: AllFields<ImpairmentIndicators<DeSerializers>>;
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
         * Static representation of the {@link referenceFixedAssetNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_FIXED_ASSET_NUMBER: fieldBuilder.buildEdmTypeField(
          'ReferenceFixedAssetNumber',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link referenceBook} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        REFERENCE_BOOK: fieldBuilder.buildEdmTypeField(
          'ReferenceBook',
          'Edm.String',
          false
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
        /**
         * Static representation of the {@link assessmentLevel} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ASSESSMENT_LEVEL: fieldBuilder.buildEnumField(
          'AssessmentLevel',
          AssetImpairmentLevelJp,
          true
        ),
        /**
         * Static representation of the {@link isFinalized} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        IS_FINALIZED: fieldBuilder.buildEnumField('IsFinalized', NoYes, true),
        /**
         * Static representation of the {@link modifyDate} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MODIFY_DATE: fieldBuilder.buildEdmTypeField(
          'ModifyDate',
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
         * Static representation of the {@link undiscountedCashFlow} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        UNDISCOUNTED_CASH_FLOW: fieldBuilder.buildEdmTypeField(
          'UndiscountedCashFlow',
          'Edm.Decimal',
          false
        ),
        /**
         * Static representation of the {@link recoverableAmount} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RECOVERABLE_AMOUNT: fieldBuilder.buildEdmTypeField(
          'RecoverableAmount',
          'Edm.Decimal',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ImpairmentIndicators)
      };
    }

    return this._schema;
  }
}
