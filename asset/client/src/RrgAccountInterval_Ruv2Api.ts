/*
 * Copyright (c) 2025 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RrgAccountInterval_Ruv2 } from './RrgAccountInterval_Ruv2';
import { RrgAccountInterval_Ruv2RequestBuilder } from './RrgAccountInterval_Ruv2RequestBuilder';
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
export class RrgAccountInterval_Ruv2Api<
  DeSerializersT extends DeSerializers = DefaultDeSerializers
> implements EntityApi<RrgAccountInterval_Ruv2<DeSerializersT>, DeSerializersT>
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
  ): RrgAccountInterval_Ruv2Api<DeSerializersT> {
    return new RrgAccountInterval_Ruv2Api(deSerializers);
  }

  private navigationPropertyFields!: {};

  _addNavigationProperties(linkedApis: []): this {
    this.navigationPropertyFields = {};
    return this;
  }

  entityConstructor = RrgAccountInterval_Ruv2;

  requestBuilder(): RrgAccountInterval_Ruv2RequestBuilder<DeSerializersT> {
    return new RrgAccountInterval_Ruv2RequestBuilder<DeSerializersT>(this);
  }

  entityBuilder(): EntityBuilderType<
    RrgAccountInterval_Ruv2<DeSerializersT>,
    DeSerializersT
  > {
    return entityBuilder<
      RrgAccountInterval_Ruv2<DeSerializersT>,
      DeSerializersT
    >(this);
  }

  customField<NullableT extends boolean = false>(
    fieldName: string,
    isNullable: NullableT = false as NullableT
  ): CustomField<
    RrgAccountInterval_Ruv2<DeSerializersT>,
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
    typeof RrgAccountInterval_Ruv2,
    DeSerializersT
  >;
  get fieldBuilder() {
    if (!this._fieldBuilder) {
      this._fieldBuilder = new FieldBuilder(
        RrgAccountInterval_Ruv2,
        this.deSerializers
      );
    }
    return this._fieldBuilder;
  }

  private _schema?: {
    DATA_AREA_ID: OrderableEdmTypeField<
      RrgAccountInterval_Ruv2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    FROM_MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      RrgAccountInterval_Ruv2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    TO_MAIN_ACCOUNT_ID: OrderableEdmTypeField<
      RrgAccountInterval_Ruv2<DeSerializers>,
      DeSerializersT,
      'Edm.String',
      false,
      true
    >;
    OPERATION_LINE_ID: OrderableEdmTypeField<
      RrgAccountInterval_Ruv2<DeSerializers>,
      DeSerializersT,
      'Edm.Guid',
      false,
      true
    >;
    ALL_FIELDS: AllFields<RrgAccountInterval_Ruv2<DeSerializers>>;
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
         * Static representation of the {@link fromMainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        FROM_MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'FromMainAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link toMainAccountId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        TO_MAIN_ACCOUNT_ID: fieldBuilder.buildEdmTypeField(
          'ToMainAccountId',
          'Edm.String',
          false
        ),
        /**
         * Static representation of the {@link operationLineId} property for query construction.
         * Use to reference this property in query operations such as 'select' in the fluent request API.
         */
        OPERATION_LINE_ID: fieldBuilder.buildEdmTypeField(
          'OperationLineId',
          'Edm.Guid',
          false
        ),
        ...this.navigationPropertyFields,
        /**
         *
         * All fields selector.
         */
        ALL_FIELDS: new AllFields('*', RrgAccountInterval_Ruv2)
      };
    }

    return this._schema;
  }
}
