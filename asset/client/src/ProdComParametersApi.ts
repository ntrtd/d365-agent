/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ProdComParameters } from './ProdComParameters';
import { ProdComParametersRequestBuilder } from './ProdComParametersRequestBuilder';
import { NoYes } from './NoYes';
import { InventProdComBranchType } from './InventProdComBranchType';
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
export class ProdComParametersApi<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<ProdComParameters<DeSerializersT>, DeSerializersT>
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
  ): ProdComParametersApi<DeSerializersT> {
    return new ProdComParametersApi(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = ProdComParameters;

  requestBuilder(): ProdComParametersRequestBuilder<DeSerializersT> {
    return new ProdComParametersRequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    ProdComParameters<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<ProdComParameters<DeSerializersT>, DeSerializersT>(
      this
    );
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<ProdComParameters<DeSerializersT>, DeSerializersT, NullableT> {
    return new CustomField(
      fieldName,
      this.entityConstructor,
      this.deSerializers,
      isNullable
    ) as any;
  }

  private _fieldBuilder?: FieldBuilder<
    typeof ProdComParameters,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        ProdComParameters,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      ProdComParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    ID: OrderableEdmTypeField<
      ProdComParameters<DeSerializers>,
      DeSerializersT,
      'Edm.Int32',
      false,
      true
    >;
    AUTOMATIC_RECALCULATION: EnumField<
      ProdComParameters<DeSerializers>,
      DeSerializersT,
      NoYes,
      true,
      true
    >;
    EXTERNAL_CONTACT_ID: OrderableEdmTypeField<
      ProdComParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    COMPANY: OrderableEdmTypeField<
      ProdComParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    BRANCH_NUMBER: EnumField<
      ProdComParameters<DeSerializers>,
      DeSerializersT,
      InventProdComBranchType,
      true,
      true
    >;
    PRIMARY_CONTACT_ID: OrderableEdmTypeField<
      ProdComParameters<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      true,
      true
    >;
    ALL_FIELDS: AllFields<ProdComParameters<DeSerializers>>;
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
         * Static representation of the {@link id} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        ID: fieldBuilder.buildEdmTypeField('ID', 'Edm.Int32', false),
        /**
         * Static representation of the {@link automaticRecalculation} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        AUTOMATIC_RECALCULATION: fieldBuilder.buildEnumField(
          'AutomaticRecalculation',
          NoYes,
          true
        ),
        /**
         * Static representation of the {@link externalContactId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        EXTERNAL_CONTACT_ID: fieldBuilder.buildEdmTypeField(
          'ExternalContactID',
          'Edm.String',
          true
        ),
        /**
         * Static representation of the {@link company} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        COMPANY: fieldBuilder.buildEdmTypeField('Company', 'Edm.String', true),
        /**
         * Static representation of the {@link branchNumber} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        BRANCH_NUMBER: fieldBuilder.buildEnumField(
          'BranchNumber',
          InventProdComBranchType,
          true
        ),
        /**
         * Static representation of the {@link primaryContactId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        PRIMARY_CONTACT_ID: fieldBuilder.buildEdmTypeField(
          'PrimaryContactID',
          'Edm.String',
          true
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', ProdComParameters)
      };
    }

    return this._schema;
  }
}
