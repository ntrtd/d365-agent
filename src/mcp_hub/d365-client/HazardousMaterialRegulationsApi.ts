/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HazardousMaterialRegulations } from './HazardousMaterialRegulations';
import { HazardousMaterialRegulationsRequestBuilder } from './HazardousMaterialRegulationsRequestBuilder';
import { HmimPrintCode } from './HmimPrintCode';
import { HmimPrintField } from './HmimPrintField';
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
export class HazardousMaterialRegulationsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<HazardousMaterialRegulations<DeSerializersT>, DeSerializersT>
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
  ): HazardousMaterialRegulationsApi<DeSerializersT> {
    return new HazardousMaterialRegulationsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = HazardousMaterialRegulations;

  requestBuilder(): HazardousMaterialRegulationsRequestBuilder<DeSerializersT> {
    return new HazardousMaterialRegulationsRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    HazardousMaterialRegulations<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HazardousMaterialRegulations<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HazardousMaterialRegulations<DeSerializersT>,
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
    typeof HazardousMaterialRegulations,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HazardousMaterialRegulations,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    REG_CODE: OrderableEdmTypeField<
      HazardousMaterialRegulations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    SEQUENCE_NUMBER: OrderableEdmTypeField<
      HazardousMaterialRegulations<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    PRINT_CODE: EnumField<
      HazardousMaterialRegulations<DeSerializers>,
      DeSerializersT,
      HmimPrintCode,
      true,
      true
    >;
    PRINT_BEFORE: OrderableEdmTypeField<
      HazardousMaterialRegulations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      HazardousMaterialRegulations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_FIELD: EnumField<
      HazardousMaterialRegulations<DeSerializers>,
      DeSerializersT,
      HmimPrintField,
      true,
      true
    >;
    PRINT_AFTER: OrderableEdmTypeField<
      HazardousMaterialRegulations<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    PRINT_WITH_PREVIOUS: EnumField<
      HazardousMaterialRegulations<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    ALL_FIELDS: AllFields<HazardousMaterialRegulations<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
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
         * Static representation of the {@link sequenceNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        SEQUENCE_NUMBER: fieldBuilder.buildEdmTypeField(
          'SequenceNumber',
          'Edm.Int32',
          false
        ),
        /**
         * Static representation of the {@link printCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_CODE: fieldBuilder.buildEnumField(
          'PrintCode',
          HmimPrintCode,
          true
        ),
        /**
         * Static representation of the {@link printBefore} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_BEFORE: fieldBuilder.buildEdmTypeField(
          'PrintBefore',
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
         * Static representation of the {@link printField} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_FIELD: fieldBuilder.buildEnumField(
          'PrintField',
          HmimPrintField,
          true
        ),
        /**
         * Static representation of the {@link printAfter} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_AFTER: fieldBuilder.buildEdmTypeField(
          'PrintAfter',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link printWithPrevious} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRINT_WITH_PREVIOUS: fieldBuilder.buildEnumField(
          'PrintWithPrevious',
          NoYes,
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', HazardousMaterialRegulations)
      };
    }

    return this._schema;
  }
}
