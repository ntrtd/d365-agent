/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ElectronicPaymentReturnOccurrenceCodes } from './ElectronicPaymentReturnOccurrenceCodes';
import { ElectronicPaymentReturnOccurrenceCodesRequestBuilder } from './ElectronicPaymentReturnOccurrenceCodesRequestBuilder';
import { EpRetOccCodeBr } from './EpRetOccCodeBr';
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
export class ElectronicPaymentReturnOccurrenceCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements
    EntityApi<
      ElectronicPaymentReturnOccurrenceCodes<DeSerializersT>,
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
  ): ElectronicPaymentReturnOccurrenceCodesApi<DeSerializersT> {
    return new ElectronicPaymentReturnOccurrenceCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ElectronicPaymentReturnOccurrenceCodes;

  requestBuilder(): ElectronicPaymentReturnOccurrenceCodesRequestBuilder<DeSerializersT> {
    return new ElectronicPaymentReturnOccurrenceCodesRequestBuilder<DeSerializersT>(
      this
    );
  }

  entityBuilder(): EntityBuilderType<
    ElectronicPaymentReturnOccurrenceCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      ElectronicPaymentReturnOccurrenceCodes<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    ElectronicPaymentReturnOccurrenceCodes<DeSerializersT>,
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
    typeof ElectronicPaymentReturnOccurrenceCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ElectronicPaymentReturnOccurrenceCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ElectronicPaymentReturnOccurrenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_GROUP_ID: OrderableEdmTypeField<
      ElectronicPaymentReturnOccurrenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    LAYOUT_RETURN_OCCURRENCE_CODE: OrderableEdmTypeField<
      ElectronicPaymentReturnOccurrenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    RETURN_OCCURRENCE_CODE: EnumField<
      ElectronicPaymentReturnOccurrenceCodes<DeSerializers>,
      DeSerializersT,
      EpRetOccCodeBr,
      true,
      true
    >;
    DESCRIPTION: OrderableEdmTypeField<
      ElectronicPaymentReturnOccurrenceCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<
      ElectronicPaymentReturnOccurrenceCodes<DeSerializers>
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
         * Static representation of the {@link layoutGroupId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_GROUP_ID: fieldBuilder.buildEdmTypeField(
          'LayoutGroupId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link layoutReturnOccurrenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        LAYOUT_RETURN_OCCURRENCE_CODE: fieldBuilder.buildEdmTypeField(
          'LayoutReturnOccurrenceCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link returnOccurrenceCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        RETURN_OCCURRENCE_CODE: fieldBuilder.buildEnumField(
          'ReturnOccurrenceCode',
          EpRetOccCodeBr,
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
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ElectronicPaymentReturnOccurrenceCodes)
      };
    }

    return this._schema;
  }
}
