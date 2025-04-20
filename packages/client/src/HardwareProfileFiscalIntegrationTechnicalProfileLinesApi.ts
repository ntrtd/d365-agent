/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { HardwareProfileFiscalIntegrationTechnicalProfileLines } from './HardwareProfileFiscalIntegrationTechnicalProfileLines';
import { HardwareProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder } from './HardwareProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder';
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
  OrderableEdmTypeField
} from '@sap-cloud-sdk/odata-v4';
export class HardwareProfileFiscalIntegrationTechnicalProfileLinesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<DeSerializersT>,
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
  ): HardwareProfileFiscalIntegrationTechnicalProfileLinesApi<DeSerializersT> {
    return new HardwareProfileFiscalIntegrationTechnicalProfileLinesApi(
      deSerializers
    );
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = HardwareProfileFiscalIntegrationTechnicalProfileLines;

  requestBuilder(): HardwareProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder<DeSerializersT> {
    return new HardwareProfileFiscalIntegrationTechnicalProfileLinesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    HardwareProfileFiscalIntegrationTechnicalProfileLines<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    HardwareProfileFiscalIntegrationTechnicalProfileLines<DeSerializersT>,
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
    typeof HardwareProfileFiscalIntegrationTechnicalProfileLines,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        HardwareProfileFiscalIntegrationTechnicalProfileLines,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    HARDWARE_PROFILE_ID: OrderableEdmTypeField<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FISCAL_TECHNICAL_PROFILE_ID: OrderableEdmTypeField<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ALL_FIELDS: AllFields<
      HardwareProfileFiscalIntegrationTechnicalProfileLines<DeSerializers>
    >;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link hardwareProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        HARDWARE_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'HardwareProfileId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link fiscalTechnicalProfileId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FISCAL_TECHNICAL_PROFILE_ID: fieldBuilder.buildEdmTypeField(
          'FiscalTechnicalProfileId',
          'Edm.String',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields(
          '*',
          HardwareProfileFiscalIntegrationTechnicalProfileLines
        )
      };
    }

    return this._schema;
  }
}
