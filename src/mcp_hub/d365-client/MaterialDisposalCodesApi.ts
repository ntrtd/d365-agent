/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { MaterialDisposalCodes } from './MaterialDisposalCodes';
import { MaterialDisposalCodesRequestBuilder } from './MaterialDisposalCodesRequestBuilder';
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
export class MaterialDisposalCodesApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<MaterialDisposalCodes<DeSerializersT>, DeSerializersT>
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
  ): MaterialDisposalCodesApi<DeSerializersT> {
    return new MaterialDisposalCodesApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = MaterialDisposalCodes;

  requestBuilder(): MaterialDisposalCodesRequestBuilder<DeSerializersT> {
    return new MaterialDisposalCodesRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    MaterialDisposalCodes<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<MaterialDisposalCodes<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    MaterialDisposalCodes<DeSerializersT>,
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
    typeof MaterialDisposalCodes,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        MaterialDisposalCodes,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    MATERIAL_DISPOSAL_CODE: OrderableEdmTypeField<
      MaterialDisposalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    MATERIAL_DISPOSAL_DESCRIPTION: OrderableEdmTypeField<
      MaterialDisposalCodes<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<MaterialDisposalCodes<DeSerializers>>;
  };

  get schema() {
    if (!this._schema) {
      const fieldBuilder = this.fieldBuilder;
      this._schema = {
        /**
         * Static representation of the {@link materialDisposalCode} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_DISPOSAL_CODE: fieldBuilder.buildEdmTypeField(
          'MaterialDisposalCode',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link materialDisposalDescription} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        MATERIAL_DISPOSAL_DESCRIPTION: fieldBuilder.buildEdmTypeField(
          'MaterialDisposalDescription',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', MaterialDisposalCodes)
      };
    }

    return this._schema;
  }
}
