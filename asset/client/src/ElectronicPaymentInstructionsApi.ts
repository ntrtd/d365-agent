/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicPaymentInstructions } from './ElectronicPaymentInstructions';
import { ElectronicPaymentInstructionsRequestBuilder } from './ElectronicPaymentInstructionsRequestBuilder';
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
export class ElectronicPaymentInstructionsApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<ElectronicPaymentInstructions<DeSerializersT>, DeSerializersT>
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
  ): ElectronicPaymentInstructionsApi<DeSerializersT> {
    return new ElectronicPaymentInstructionsApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ElectronicPaymentInstructions;

  requestBuilder(): ElectronicPaymentInstructionsRequestBuilder<DeSerializersT> {
    return new ElectronicPaymentInstructionsRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ElectronicPaymentInstructions<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ElectronicPaymentInstructions<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ElectronicPaymentInstructions<DeSerializersT>,
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
    typeof ElectronicPaymentInstructions,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ElectronicPaymentInstructions,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ElectronicPaymentInstructions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_GROUP_ID: OrderableEdmTypeField<
      ElectronicPaymentInstructions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    INSTRUCTION: OrderableEdmTypeField<
      ElectronicPaymentInstructions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    QUANTITY: OrderableEdmTypeField<
      ElectronicPaymentInstructions<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ElectronicPaymentInstructions<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ElectronicPaymentInstructions<DeSerializers>>;
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
         * Static representation of the {@link layoutGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'LayoutGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link instruction} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        INSTRUCTION: fieldBuilder.buildEdmTypeField(
          'Instruction',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link quantity} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        QUANTITY: fieldBuilder.buildEdmTypeField(
          'Quantity',
          'Edm.Int32',
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ElectronicPaymentInstructions)
      };
    }

    return this._schema;
  }
}
